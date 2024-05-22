import React from 'react'
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import AirlineDashboardContent from '../(components)/AirlineDashboardContent';

const AirlineDashboard = async () => {
    const session = await getServerSession(options);

    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/Member");
    }
  
  return (
    <div>
      <AirlineDashboardContent session={session} />
    </div>
  )
}

export default AirlineDashboard
