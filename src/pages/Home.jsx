import { useEffect, useState } from "react"
import Slider from "../components/Slider"
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import Spinner from "../components/Spinner"

export default function Home() {
  return (
    <div>
      <Slider />
    </div>
  )
}
