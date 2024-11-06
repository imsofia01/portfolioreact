import React, { useState, useRef} from "react";
import emailjs from "@emailjs/browser";

const MessageModal = ({ isOpen, closeModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const form = useRef(); // Ref for the form

    if (!isOpen) return null; // Render nothing if modal is not open

    const validateForm = () => {
        let formErrors = {};
        if (!name) formErrors.name = "Name is required.";
        if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = "Please enter a valid email.";
        if (!message) formErrors.message = "Message is required.";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6rl8ezn", 
                "template_302wgkg", 
                form.current, 
                "somgaJDkZbYs5RYrh"
            )
            .then(
                (result) => {
                    console.log(result.text)
                    console.log("Email sent successfully!");
                    closeModal();
                   
                },
                (error) => {
                    console.log("Email sending failed...", error.text);
                }
            );
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Handle form submission logic here (e.g., send message)
            console.log({ name, email, message });
            closeModal();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
        <div className="bg-white p-8 rounded-lg w-80 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Send me a message and hire me</h2>
            <p className="text-gray-700 mb-6 text-center">
                Thank you for showing interest in my work. Reach out to discuss your project or any inquiries.
            </p>

            <form ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="user_name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-1 focus:ring-2 focus:ring-gray-800"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {errors.user_name && <p className="text-red-500 text-sm mt-2">{errors.user_name}</p>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="user_email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-1 focus:ring-2 focus:ring-gray-800"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.user_email && <p className="text-red-500 text-sm mt-2">{errors.user_email}</p>}
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-800"
                        placeholder="Send message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>

                <div className="flex justify-center gap-10">
                    <button
                        type="button"
                        className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                        onClick={closeModal}
                    >
                        Close
                    </button>

                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default MessageModal;
