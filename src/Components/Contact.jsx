import React, { useRef } from "react";
import Swal from "sweetalert2";
import { GrMail } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxhO2RTBpFwsA0zCOpsJqyOvBGE60VkWnYffKcfF_8ujk3-pXx-jZVKQ0lIW7q0vYQj/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thanks for your response!",
          customClass: {
            popup: "bw",
          },
        });
        form.current.reset();
      } else {
        console.error("Error submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-white text-white">
      <div className="w-full max-w-lg bg-gray-200 rounded-lg p-4 shadow-lg md:p-6">
        <h2 className="text-center text-3xl font-semibold mb-4 text-black">
          Contact us
        </h2>
        
        <div className="flex flex-col gap-6">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 rounded bg-white border border-gray-600 text-black"
            />
            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              required
              className="p-3 rounded bg-white border border-gray-600 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-3 rounded bg-white border border-gray-600 text-black"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="p-3 rounded bg-white border border-gray-600 text-black h-32"
            ></textarea>
            <button className="self-center bg-white text-gray-900 py-2 px-6 rounded-lg hover:bg-gray-200 transition">
              Submit
            </button>
          </form>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
