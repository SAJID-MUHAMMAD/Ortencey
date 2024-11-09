import React from "react";
import CoursesItems from "./CoursesItems";

const Courses = () => {
  return (
    <section>
      <div className="container flex gap-9 justify-center px-2">
        <CoursesItems
          img={"/public/Home/coursesIcon1.png"}
          titel={"Graphics Design"}
        />
        <CoursesItems
          img={"/public/Home/coursesIcon2.png"}
          titel={"Web Developer"}
        />
        <CoursesItems
          img={"/public/Home/coursesIcon3.png"}
          titel={"Digital Marketing"}
        />
        <CoursesItems
          img={"/public/Home/coursesIcon4.png"}
          titel={"App Design"}
        />
      </div>
    </section>
  );
};

export default Courses;
