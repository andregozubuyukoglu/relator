import { useState } from "react"
import { FaHome } from "react-icons/fa"
import { getAuth, updateProfile } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const { name, email } = formData

  function onLogout() {
    auth.signOut()
    navigate("/")
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //Update display name
        await updateProfile(auth.currentUser, {
          displayName: name,
        })

        // update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        })
      }
      toast.success("Updated profile")
    } catch (error) {
      toast.error("something went wrong")
    }
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-ful md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-grey-300 rounded transition ease-in-out${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />

            {/* Email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-grey-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6 ">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit()
                    setChangeDetail((prevState) => !prevState)
                  }}
                  className="ml-1 text-red-600 hover:text-red-800 transition  ease-in-out duration-150 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition  ease-in-out duration-150 cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FaHome className="mr-3 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  )
}
