import React from "react";

const About = () => {
  return (
    <section className="py-28">
      <div className="container flex gap-20">
        <div className="w-1/2">
          <img src="/public/Home/about-img.png" alt="" />
        </div>

        <div className="w-1/2">
          <h3 className="text-xl font-dmsans font-medium text-[#3661FC]">
            About Our Company
          </h3>
          <h2>Best Digital Marketing Agency For People</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have as suffered alteration in some form, by injected
            humour, or randomised words which don't a look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </p>
          <div className="flex">
            <div>
              <span>Digital Strategy</span>
              <span>Marketing</span>
            </div>
            <div>
              <div>
                <span>SEO Optimization</span>
                <span>First Working Process</span>

                {/* ============== =================================*/}
                <h1>heoerusbdfkjiejlanfldskfdsfkfdsl</h1>
                <h3 className="text-xl font-dmsans font-medium text-[#3661FC]">
                  About Our Company
                </h3>
                <h2>Best Digital Marketing Agency For People</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have as suffered alteration in
                  some form, by injected humour, or randomised words which don't
                  a look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn't
                  anything.
                </p>
                {/* =============================================== */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
