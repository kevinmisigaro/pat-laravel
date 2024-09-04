import { Abstract } from "@/types";
import moment from "moment";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function AbstractTable() {
    const [loading, setLoading] = useState<boolean>(true);
    const [list, setList] = useState<Abstract[]>([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response_json = await fetch("/listofabstracts");
            const response = await response_json.json();
            setList(response);
            setFilteredData(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const renderSubTheme = (num: number): string => {
        switch (num) {
            case 1:
                return "Perinatology";
            case 2:
                return "Double burden of disease in paediatric population";
            case 3:
                return "General Paediatrics and Adolescent medicine";
            case 4:
                return "Health system strengthening";
            case 5:
                return "Impact of climatic change and enviromental health";
            default:
                return "Perinatology";
        }
    };

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState<Abstract[]>(list);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearch(searchTerm);

        const filtered = list.filter(
            (item) =>
                item.title.toLowerCase().includes(searchTerm) ||
                item.user.name.toLowerCase().includes(searchTerm)
        );

        if (searchTerm == "") {
            setFilteredData(list);
        } else {
            setFilteredData(filtered);
        }
    };

    const downloadFile = async (url: string, filename: string) => {
        try {
            // Fetch the file from the URL
            const response = await fetch(`uploads/${url}`, {
                method: "GET",
            });

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch the file: ${response.statusText}`
                );
            }

            // Get the blob from the response
            const blob = await response.blob();

            // Create a URL for the blob
            const urlObject = URL.createObjectURL(blob);

            // Create a temporary link element
            const a = document.createElement("a");
            a.href = urlObject;
            a.download = filename;

            // Append the link to the body (necessary for some browsers)
            document.body.appendChild(a);

            // Programmatically click the link to trigger the download
            a.click();

            // Clean up: remove the link and revoke the object URL
            document.body.removeChild(a);
            URL.revokeObjectURL(urlObject);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const columns = [
        {
            name: "Title",
            sortable: true,
            selector: (row: Abstract) => row.title,
        },
        {
            name: "Sub theme",
            sortable: true,
            cell: (row: Abstract) => renderSubTheme(row.subtheme),
        },
        {
            name: "Author",
            selector: (row: Abstract) => row.user.name,
        },
        {
            name: "Download",
            cell: (row: Abstract) => (
                <div
                    onClick={() => downloadFile(row.media, row.title)}
                    className="px-2 py-1 bg-blue-600 text-white cursor-pointer"
                >
                    Download
                </div>
            ),
        },
        {
            name: "Submission date",
            sortable: true,
            selector: (row: Abstract) =>
                moment(row.created_at).format("DD/MM/YYYY"),
        },
    ];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading..</div>
            ) : (
                <div>
                    <div className="flex flex-row justify-between items-center mb-8">
                        <div>Current count: {list.length}</div>
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={search}
                            onChange={handleSearch}
                            className="p-2 border border-gray-300 rounded mb-3 w-[20vw]"
                        />
                    </div>
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination
                    />
                </div>
            )}
        </div>
    );
}

export default AbstractTable;
