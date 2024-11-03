import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TabsComp() {
  return (
    <div className="flex justify-center items-center w-full">
      <Tabs defaultValue="vision" className="w-full">
        <TabsList className="flex justify-center h-[47px] w-full mb-3">
          <TabsTrigger value="vision" className="text-lg w-[33%]">
            Vision
          </TabsTrigger>
          <TabsTrigger value="mission" className="text-lg w-[33%]">
            Mission
          </TabsTrigger>
          <TabsTrigger value="values" className="text-lg w-[33%]">
            Values
          </TabsTrigger>
        </TabsList>
        <div className="top-2 pl-2 text-lg">
          <TabsContent value="vision">
            <p>
              Excellence in all spheres of business operations through a process
              of continual improvement in the defined quality objectives to
              create a World Class Integrated Facility Management System in
              India.
            </p>
          </TabsContent>
          <TabsContent value="mission">
            <p>
              We create and sustain a brand focused Organization through
              employee engagement and process excellence and stay ahead of the
              competition by innovation & adaptability to the growing needs of
              our betterment. We Believe and Do <b>“Service with Smile“</b>.
            </p>
          </TabsContent>
          <TabsContent value="values">
            <p>Delivering accountability towards –</p>
            <ul className="list-disc pl-7">
              <li>Employees</li>
              <li>Customers</li>
              <li>Society</li>
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default TabsComp;
