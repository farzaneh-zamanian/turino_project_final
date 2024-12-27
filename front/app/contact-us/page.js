import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; 
function ContactUsPage() {
  return (
    <div className="container mx-auto py-12 px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* زcontact form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-primary">فرم تماس</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">نام</label>
              <input 
                type="text" 
                id="name" 
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="نام خود را وارد کنید" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">ایمیل</label>
              <input 
                type="email" 
                id="email" 
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="ایمیل خود را وارد کنید" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">پیام</label>
              <textarea 
                id="message" 
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                rows="4" 
                placeholder="پیام خود را وارد کنید" 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              ارسال
            </button>
          </form>
        </div>

        {/* contact info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-primary">اطلاعات تماس</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-primary mr-2" />
            <p className="text-gray-700"><strong>آدرس:</strong> خیابان 123، سنندج، ایران</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-primary mr-2" />
            <p className="text-gray-700"><strong>تلفن پشتیبانی:</strong> 7854-021</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-primary mr-2" />
            <p className="text-gray-700"><strong>ایمیل:</strong> info@example.com</p>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;