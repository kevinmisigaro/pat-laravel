import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

function GuestAbstract({ auth }: PageProps) {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        title: "",
        file: null,
        coauthor: "",
        subtheme: "1",
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

        post("/abstract/guest/store", {
            onSuccess: () => {
                console.log("File uploaded successfully");
                setSuccess(true);
                reset("title", "file", "coauthor", "coauthor", "name", "email");
            },
            onError: () => {
                console.error("File upload failed");
                setSuccess(false);
                setError(true);
            },
        });
    };

    return (
        <Guest>
            <div>
                <h3 className="text-center mb-8 text-xl font-bold">
                    Abstract Submission
                </h3>
                <div>
                    {success ? (
                        <div className="text-white w-full text-center my-4 rounded-lg py-4 bg-green-600">
                            Abstract submitted successfully
                        </div>
                    ) : (
                        ""
                    )}
                    {error ? (
                        <div className="text-white w-full text-center my-4 rounded-lg py-4 bg-red-600">
                            Abstract could not be submitted
                        </div>
                    ) : (
                        ""
                    )}
                    <form
                        onSubmit={submit}
                        className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md"
                    >
                        <div className="mb-5">
                            <small>Personal details</small>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="transactionName"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="transactionName"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <hr className="my-10" />

                        <div className="mb-5">
                            <small>Abstract details</small>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="image"
                            >
                                Upload Abstract
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
                                htmlFor="transactionName"
                            >
                                Abstract Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="transactionName"
                            >
                                Co-authors(optional)
                            </label>
                            <input
                                type="text"
                                name="coauthor"
                                value={data.coauthor}
                                onChange={(e) =>
                                    setData("coauthor", e.target.value)
                                }
                                className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="subtheme"
                            >
                                Subtheme
                            </label>
                            <select
                                id="subtheme"
                                name="subtheme"
                                onChange={(e) =>
                                    setData("subtheme", e.target.value)
                                }
                                className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value={1}>Perinatology</option>
                                <option value={2}>
                                    Double burden of disease in paediatric
                                    population
                                </option>
                                <option value={3}>
                                    General Paediatrics and Adolescent medicine
                                </option>
                                <option value={4}>
                                    Health system strengthening
                                </option>
                                <option value={5}>
                                    Impact of climatic change and enviromental
                                    health
                                </option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                {processing
                                    ? "Submitting abstract.."
                                    : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Guest>
    );
}

export default GuestAbstract;
