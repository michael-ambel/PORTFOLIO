"use client";
import React, { useState } from "react";

const currentYear = new Date().getFullYear();

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("SEND");
  const [error, setError] = useState("");
  const [sucsuss, setSucsuss] = useState(false);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING...");
    setError("");
    setSucsuss(true);

    console.log("Form submitted:", formData);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const res = await response.json();

      if (response.ok) {
        setStatus("SENT");
        setError("");
        setSucsuss(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("RETRY");
        setError(res.message);
        setSucsuss(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("RETRY");
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col ml-[20px] md:ml-[40px] lg:ml-[70px] xl:ml-[77px] w-full mr-[20px] md:mr-[160px] lg:mr-[180px] xl:mr-[232px] md:py-[35px] lg:py-[55px] xl:py-[85px]">
      <h2 className="text-[40px] lg:text-[50px] xl:text-[64px] font-black mb-[20px] lg:mb-[60px] xl:mb-[120px]">
        Let’s <span className=" text-main">Connect ...</span>
      </h2>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
          <div className=" flex flex-col justify-between md:w-[400px] h-[320px] pb-[20px] md:max-h-[440px]">
            <div className="h-[60px]">
              <h3 className="text-[24px] font-bold">Addres</h3>
              <p className="text-[16px] font-bold text-fade">
                St. Michael Church CMC, A.A, Ethiopia
              </p>
            </div>

            <div className="h-[60px]">
              <h3 className="text-[24px] font-bold">Mail Me</h3>
              <p className="text-[16px] font-bold text-fade">
                michaelambel46@gmail.com
              </p>
            </div>
            <div className="h-[60px]">
              <h3 className="text-[24px] font-bold">Phone</h3>
              <p className="text-[16px] font-bold text-fade">
                +251 9 64 60 30 30
              </p>
            </div>
            <div className="h-[60px]">
              <h3 className="text-[24px] font-bold">Social Media</h3>
              <div className="flex justify-between mt-[10px] w-[280px]">
                <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
                <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
                <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
                <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
                <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
              </div>
            </div>
          </div>

          <div className="flex-1 h-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full gap-[30px] text-main text-[18px]"
            >
              <div className="flex flex-col md:flex-row gap-[22px]">
                <div className="flex items-center bg-bs md:w-1/2 h-[52px] rounded-[22px] px-[20px] py-[14px]">
                  <label htmlFor="name" className="w-full">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-bs w-full outline-none"
                      placeholder="Name"
                    />
                  </label>
                </div>

                <div className="flex flex-row items-center bg-bs md:w-1/2 h-[53px] rounded-[22px] px-[20px] py-[14px]">
                  <label htmlFor="email" className="w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-bs w-full outline-none"
                      placeholder="Email"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-[30px]">
                <div className="bg-bs w-full h-[52px] rounded-[22px] px-[20px] py-[14px] flex items-center">
                  <label htmlFor="subject" className=" w-full">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-bs  w-full outline-none"
                      placeholder="Subject"
                    />
                  </label>
                </div>

                <div className="bg-bs w-full rounded-[22px] h-auto px-[20px] py-[14px] flex items-center">
                  <label htmlFor="body" className="w-full">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="bg-bs text-main w-full min-h-[194px] outline-none "
                      placeholder="Message"
                    ></textarea>
                  </label>
                </div>
              </div>

              <div className="flex gap-9">
                <button
                  type="submit"
                  className="h-[52px] w-[140px] text-[18px] rounded-full bg-main text-black font-semibold"
                >
                  {status}
                </button>
                {sucsuss && (
                  <div className="text-[22px] pt-[12px] align-text-bottom text-green-600">
                    Your Email Deliverd Sucssfuly!
                  </div>
                )}
                <div className="text-[22px] pt-[12px] text-red-600 w-auto">
                  {error}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex text-[14px] md:text-[15px] h-[100px] mb-[60px] font-medium text-fade justify-between mt-[80px] md:mt-[100px]">
          <p>&copy; {currentYear} Michael. All Rights Reserved.</p>
          <p className="ml-[30px]">
            Designed and Developed with 💻 & ❤️ by Michael A.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
