import { useState } from "react"

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Andre",
    email: "andre@andre.com",
  })
  const { name, email } = formData

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
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-grey-300 rounded transition ease-in-out"
            />

            {/* Email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-grey-300 rounded transition ease-in-out"
            />
          </form>
        </div>
      </section>
    </>
  )
}
