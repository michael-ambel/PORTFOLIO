"use client";
import React, { useState } from "react";

const currentYear = new Date().getFullYear();

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="flex flex-col ml-[57px] w-full mr-[232px] py-[85px]">
      <h2 className="text-[64px] font-black mb-[120px]">
        Let’s <span className=" text-main">Connect ...</span>
      </h2>

      <div className="flex justify-between h-full">
        <div className=" flex flex-col justify-between w-[328px] max-h-[358px]">
          <div>
            <h3 className="text-[24px] font-bold">Addres</h3>
            <p className="text-[16px] font-bold text-fade">
              St. Michael Church CMC, A.A, Ethiopia
            </p>
          </div>

          <div>
            <h3 className="text-[24px] font-bold">Mail Me</h3>
            <p className="text-[16px] font-bold text-fade">
              michaelambel46@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-bold">Phone</h3>
            <p className="text-[16px] font-bold text-fade">
              +251 9 64 60 30 30
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-bold">Social Media</h3>
            <div className="flex justify-between mt-[10px] w-[236px]">
              <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
              <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
              <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
              <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
              <img src="/sm.svg" className="w-[36px] h-[36px]" alt="" />
            </div>
          </div>
        </div>

        <div className="w-[618px] h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full gap-[30px] text-white text-[18px]"
          >
            <div className="flex flex-row gap-[22px]">
              <div className="flex items-center bg-bs w-1/2 h-[52px] rounded-[22px] px-[20px] py-[14px]">
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

              <div className="flex flex-row items-center bg-bs w-1/2 h-[53px] rounded-[22px] px-[20px] py-[14px]">
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
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="bg-bs  w-full min-h-[194px] outline-none "
                    placeholder="Message"
                  ></textarea>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="h-[52px] w-[140px] text-[18px] rounded-full bg-main text-black font-semibold"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="flex text-[15px] font-medium text-fade justify-between mt-[84px]">
        <p>&copy; {currentYear} Michael. All Rights Reserved.</p>
        <p>Designed and Developed with 💻 & ❤️ by Michael A.</p>
      </div>
    </div>
  );
}

export default Contact;
