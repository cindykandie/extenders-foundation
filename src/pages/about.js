import Image from "next/image";
import React from "react";
import { boardMembers, allMembers, values } from "@/data/members";
import BoardMembers from "@/components/BoardMembers";
import AllMembers from "@/components/AllMembers";
import CoreValue from "@/components/CoreValue";
import CustomHead from "@/components/CustomHead";

export default function About() {
  return (
    <div className="mt-20 bg-gray">
      <CustomHead />
      <div className="bg-custom flex flex-col items-center justify-center md:items-end md:justify-center ">
        <div className="md:mr-8  md:text-4xl text-3xl flex flex-col font-bold text-white items-center">
          <h1 className=" font-bold text-white">ABOUT THE </h1>

          <h1 className="md:ml-0 ml-20">
            <span className="text-red-600">EXTENDERS </span> FOUNDATION
          </h1>
        </div>
      </div>
      <section className="px-4 py-6 md:px-8 lg:py-12">
        <p className="text-sm md:text-base max-w-screen-md mx-auto">
          Extenders Foundation is a Community Based Organization (CBO) whose
          goal is to improve the living conditions of orphans and the less
          privileged in the community. Our mission is to empower these groups of
          people through assistance, education and advocacy. Extenders
          Foundation has been in operation since 2014, helping the vulnerable in
          the community. Our committed team of volunteers put in a lot of effort
          to fulfill the group’s mission. Our programs and services are designed
          to meet the diverse needs of our community. We organize a variety of
          programs which are tailored to address the unique challenges faced by
          the underprivileged in the community. At Extenders Foundation, we
          believe that everyone deserves to live a healthy and fulfilling life.
          We strive to create a welcoming and inclusive environment where
          everyone feels valued and supported. In all our endeavors, we are
          devoted to openness and accountability. We value community input and
          regularly assess our programs to make sure they are fulfilling the
          needs of the people we serve.
        </p>
      </section>
      <div className="mt-4 p-2 box-border">
        <Image
          src="/assets/bg-image4.png"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm"
        />
      </div>

      <div className="max-w-4xl mx-auto md:flex justify-center items-center  mt-4">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-2xl  mt-8">OUR MISSION</h1>
          <div className="h-1 w-16 md:ml-30 mb-[10px] bg-red-600"></div>
          <p className="text-md leading-5 w-4/5 mt-8 md:mt-20 text-center">
            To provide love, care and support to orphans, and advocate for their
            rights and dignity.
          </p>
        </div>
        <Image
          src="/assets/img5.jpg"
          width={500}
          height={200}
          className="h-[350px] w-[350px] rounded-md mr-10 ml-24 md:ml-0 mt-4 md:mt-0"
        />
      </div>

      <div className="mt-8 bg-white p-2">
        <div className="flex flex-col md:flex-row justify-center items-center lg:ml-56">
          <Image
            src="/assets/img5.jpg"
            width={500}
            height={350}
            className="h-[350px] w-[350px] rounded-md  md:mt-4 mb-4 "
          />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl  mt:mt-8">OUR VISION</h1>
            <div className="h-1 w-16 md:ml-30 mb-[10px] bg-red-600"></div>

            <p className="text-md text-center leading-5 w-4/5 md:w-2/3 mt-8 md:mt-20">
              To ensure that every orphan gets access to basic needs and feels
              loved and cared for.
            </p>
          </div>
        </div>
      </div>

      {/* core values */}
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR CORE VALUES</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
        </div>
        <div className="md:flex gap-8 md:mt-16 max-w-6xl mx-auto">
          {values.map((value) => (
            <div key={value.id}>
              <CoreValue value={value} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-2 box-border">
        <Image
          src="/assets/img7.jpg"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR TEAM</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
          <div className="mt-8 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold">OUR BOARD</h3>

            <div className="grid sm:grid-col md:grid-cols-2 max-w-6xl">
              {boardMembers.map((member) => (
                <div key={member.id} className="">
                  <BoardMembers member={member} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center md:mb-12">
            <h3 className="text-xl font-semibold mb-4">OUR MEMBERS</h3>

            <div className="md:flex gap-8">
              {allMembers.map((memba) => (
                <div key={memba.id} className="">
                  <AllMembers memba={memba} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
