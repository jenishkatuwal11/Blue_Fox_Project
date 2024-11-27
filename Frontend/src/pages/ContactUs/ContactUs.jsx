import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Write to Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Your Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Email*</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-600">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Message</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Send
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4">
              To inquire more about us or if you have a problem related to
              RoommateHub, please feel free to contact us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 w-6 h-6 mr-4" />
                <span className="text-lg text-gray-800">
                  info@roommatehub.com
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 w-6 h-6 mr-4" />
                <span className="text-lg text-gray-800">+977 1234567890</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6 mr-4" />
                <span className="text-lg text-gray-800">Bhaktapur, Nepal</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p className="mt-2">Sunday-Friday: 9 a.m. to 6 p.m.</p>
              <p>Saturday: 10 a.m. to 3 p.m.</p>
              <p>Online: 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.158562089353!2d85.42359077530935!3d27.67353932455537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb519c7698b%3A0x417eecddbe2c8d7b!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1697649023590!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Bhaktapur Map"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
