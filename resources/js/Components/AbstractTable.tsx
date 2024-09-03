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

    // utils/downloadFile.ts

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
            selector: (row: Abstract) => row.title,
        },
        {
            name: "Sub theme",
            cell: (row: Abstract) => renderSubTheme(row.subtheme),
        },
        {
            name: "Submission date",
            selector: (row: Abstract) =>
                moment(row.created_at).format("DD/MM/YYYY"),
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
                    <div className="mb-8">Current count: {list.length}</div>
                    <DataTable columns={columns} data={list} pagination />
                </div>
            )}
        </div>
    );
}

export default AbstractTable;
