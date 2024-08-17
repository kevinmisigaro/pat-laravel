// src/components/SubscriptionForm.js
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

const SubscriptionForm = () => {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        file: null,
        subscription_type: "members",
        transaction_number: "",
        transaction_message: "",
    });
    const handleChange = (e: any) => {
        setData(
            e.target.name,
            e.target.files ? e.target.files[0] : e.target.value
        );
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setError(false);

        post("/payment/store", {
            onSuccess: () => {
                console.log("File uploaded successfully");
                setSuccess(true);
                reset(
                    "subscription_type",
                    "transaction_message",
                    "transaction_number",
                    "file"
                );
            },
            onError: () => {
                console.error("File upload failed");
                setSuccess(false);
                setError(true);
            },
        });
    };

    return (
        <div>
            {success ? (
                <div className="text-white w-full text-center my-4 rounded-lg py-4 bg-green-600">
                    Payment confirmation submitted successfully
                </div>
            ) : (
                ""
            )}
            {error ? (
                <div className="text-white w-full text-center my-4 rounded-lg py-4 bg-red-600">
                    Payment confirmation could not be submitted
                </div>
            ) : (
                ""
            )}
            <form
                className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md"
                onSubmit={submit}
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
                        name="file"
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
                        onChange={(e) =>
                            setData("subscription_type", e.target.value)
                        }
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
                        value={data.transaction_number}
                        onChange={(e) =>
                            setData("transaction_number", e.target.value)
                        }
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
                        value={data.transaction_message}
                        onChange={(e) =>
                            setData("transaction_message", e.target.value)
                        }
                        className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {processing ? "Submitting.." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubscriptionForm;
