function AbstractForm() {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md"
        >
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                >
                    Upload Abstract
                </label>
                <input
                    type="file"
                    name="document"
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
                    id="transactionName"
                    name="transactionName"
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
                    id="transactionName"
                    name="transactionName"
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subscriptionType"
                >
                    Subtheme
                </label>
                <select
                    id="subscriptionType"
                    name="subscriptionType"
                    className="w-full text-gray-700 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value={1}>Perinatology</option>
                    <option value={2}>
                        Double burden of disease in paediatric population
                    </option>
                    <option value={3}>
                        General Paediatrics and Adolescent medicine
                    </option>
                    <option value={4}>Health system strengthening</option>
                    <option value={5}>
                        Impact of climatic change and enviromental health
                    </option>
                </select>
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
}

export default AbstractForm;
