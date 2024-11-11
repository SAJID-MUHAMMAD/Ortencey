import React from "react";
import CountUp from "react-countup";

const Appointment = () => {
  return (
    <section className="py-20">
      <div className="container bg-[url('/public/Home/appointment-bg.png')] rounded-[50px]">
        <CountUp end={100} duration={2.75} />
        <br />
        <br />
        <CountUp end={10000} duration={2.75} />
        <CountUp end={56700} duration={2.75} />
      </div>
    </section>
  );
};

export default Appointment;
