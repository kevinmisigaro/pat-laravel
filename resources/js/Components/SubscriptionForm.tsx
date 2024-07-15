// src/components/SubscriptionForm.js
import React, { useState } from "react";

const SubscriptionForm = () => {
    const [formData, setFormData] = useState({
        image: null,
        subscriptionType: "members",
        transactionName: "",
        transactionMessage: "",
    });

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <form
            className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md"
            onSubmit={handleSubmit}
        >
            <div className="text-xl font-bold mb-10">
                Fill in the form below
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                >
                    Upload Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subscriptionType"
                >
                    Type of Subscription
                </label>
                <select
                    id="subscriptionType"
                    name="subscriptionType"
                    value={formData.subscriptionType}
                    onChange={handleChange}
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="members">Members</option>
                    <option value="students">Students</option>
                    <option value="internationals">Internationals</option>
                </select>
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="transactionName"
                >
                    Transaction Name or Number
                </label>
                <input
                    type="text"
                    id="transactionName"
                    name="transactionName"
                    value={formData.transactionName}
                    onChange={handleChange}
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="transactionMessage"
                >
                    Transaction Message (Optional)
                </label>
                <textarea
                    id="transactionMessage"
                    name="transactionMessage"
                    value={formData.transactionMessage}
                    onChange={handleChange}
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SubscriptionForm;
