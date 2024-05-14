import React from 'react'
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const AirlineDashboard = async () => {
    const session = await getServerSession(options);

    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/Member");
    }
  
  return (
    <div>
      Airline Dashboard
    </div>
  )
}

export default AirlineDashboard
