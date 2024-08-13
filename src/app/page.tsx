"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/components/layout"
import taskIcon from "@/../public/ph--notepad.png";
import completedIcon from "@/../public/codicon--feedback.png";
import overdueIcon from "@/../public/material-symbols-light--person-cancel-outline.png";

const Home = () => {
  const activities = [
    {
      icon: taskIcon,
      title: "New Tasks",
      description: "You have 4 new tasks for today",
      count: 4,
    },
    {
      icon: completedIcon,
      title: "Completed",
      description: "You have completed 3 tasks yesterday",
      count: 3,
    },
    {
      icon: overdueIcon,
      title: "Overdue",
      description: "2 tasks are overdue",
      count: 2,
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white shadow-md rounded-lg mx-7 my-3">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Activity Summary</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-slate-100 rounded-md hover:bg-slate-200 transition duration-300">
              <div className="flex-shrink-0">
                <Image src={activity.icon} className="h-8 w-8" alt={activity.title} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
              <div className="flex-shrink-0 text-center">
                <span className="block text-xl font-bold text-gray-900">{activity.count}</span>
                <span className="block text-sm text-gray-500">tasks</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
