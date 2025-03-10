import { useState } from "react";


const Contact = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    // State to manage popup visibility
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // Handle input change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      setIsSubmitted(true); // Show popup message
  
      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  
      // Hide popup after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    };
  
    return (
      <section id="contact" className="py-16 overflow-hidden md:py-20 lg:py-28 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp mb-12 rounded-md bg-opacity-10 bg-gradient-to-r from-[#141E30] to-[#243B55] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Connect With Us
                </h2>
                <p className="mb-12 text-base font-medium text-white">
                  Our support team will get back to you ASAP via email.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="block mb-3 text-sm font-medium text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full rounded-md bg-gray-800 border border-gray-700 py-3 px-6 text-base text-white placeholder-gray-400 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#1a1a1a]"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="block mb-3 text-sm font-medium text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full rounded-md bg-gray-800 border border-gray-700 py-3 px-6 text-base text-white placeholder-gray-400 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#1a1a1a]"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="block mb-3 text-sm font-medium text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder="Enter your Message"
                          className="w-full resize-none rounded-md bg-gray-800 border border-gray-700 py-3 px-6 text-base text-white placeholder-gray-400 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#1a1a1a]"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded-md px-9 hover:bg-opacity-80 hover:shadow-signUp"
                        style={{
                            background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)', 
                          }}  >
                        Submit Ticket
                      </button>
                    </div>
                  </div>
                </form>
  
                {/* Popup message */}
                {isSubmitted && (
                  <div className="p-4 mt-4 text-green-700 bg-green-100 rounded-md">
                    Thanks for submitting your message!
                  </div>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
           
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  