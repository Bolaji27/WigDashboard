"use client"
import Link from "next/link";
import { useState } from "react";


export default function Recentactivity () {
  const [isTrue, setIsTrue] = useState(false);

  const openAllactivities = () => {
    setIsTrue(true)
  }
    const activities = [
        {
          id: 1,
          message: "New order #1023 created",
          meta: "Today · 2 mins ago",
        },
        {
          id: 2,
          message: "Service “Cleaning” updated",
          meta: "Yesterday · by Admin",
        },
        {
          id: 3,
          message: "Revenue report generated",
          meta: "2 days ago",
        },
      ];
    return (
        <div>
            <div className="mt-8">
    <ul className="space-y-4">
      {activities.map((act)=>(<li key={act.id} className=" border rounded-lg p-4">
      <p className="flex-1">{act.message}</p>
      <span className="text-xs text-gray-500">{act.meta}</span>
      </li>))}
    </ul>
  </div>
  <div className="mt-6 mx-5 flex justify-end">
   <Link href="/allactivity" className="border rounded-full px-6 py-2 text-sm cursor-pointer hover:border-blue-400">
   View All Activities
   </Link> 
   </div>

  
</div>

    )
}