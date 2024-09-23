// MessageModal.jsx
import React from "react";


const MessageModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null; // Render nothing if modal is not open

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-90 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">Send me a message and hire me</h2>
                <p className="text-gray-700 mb-6 text-center">
                    Thank you for showing interest in my work. Reach out to discuss your project or any inquiries.
                </p>
                
                {/* email */}
                <div class="mb-4">
                <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input type="email" id="email" className="w-full h- px-4 py-2 border rounded-lg focus:outline-1 focus:ring-2 focus:ring-gray-800" placeholder="Enter your email" required/>
                <p class="text-red-500 text-sm mt-2 hidden" id="emailError">Please enter a valid email.</p>
                </div>

                {/* Message */}
                <div class="mb-4">
                <label for="message" className="block text-gray-800 text-sm font-semibold mb-2">Message</label>
                
               <textarea className="w-full px-4 py-2 border rounded-lg  focus:ring-2 focus:ring-gray-800" placeholder="Send message" label="message"/>
                </div>

     

                <div className="flex justify-center gap-10">
                <button
                        className="bg-blue-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                        onClick={closeModal}
                    >
                        Close
                    </button>

                    <button
                        className="bg-blue-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                        onClick={closeModal}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;
