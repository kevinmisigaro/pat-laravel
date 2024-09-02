import { User } from "@/types";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";

function ConferenceList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [list, setList] = useState<User[]>([]);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response_json = await fetch("/conferencelist");
            const response = await response_json.json();
            setList(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const confirmConferenceAttendance = async (id: number) => {
        console.log("ran");

        try {
            const responseJson = await fetch(
                `/approvals/confirmattendance/${id}`
            );
            const response = await responseJson.json();

            if (response) {
                console.log(response);
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Name",
            selector: (row: User) => row.name,
        },
        {
            name: "Email",
            selector: (row: User) => row.email,
        },
        {
            name: "Work",
            selector: (row: User) => _.capitalize(row.work),
        },
        {
            name: "PAT Member",
            selector: (row: User) => (row.pat_member == 0 ? "No" : "Yes"),
        },
        {
            name: "Congress Confirmation",
            cell: (row: User) => (
                <div
                    className={`rounded-md px-2 py-1 text-white ${
                        row.congress_confirmation == 0
                            ? "bg-red-500"
                            : "bg-green-500"
                    }`}
                >
                    {row.congress_confirmation == 0 ? "No" : "Yes"}
                </div>
            ),
        },
        {
            name: "Conference Approval",
            cell: (row: User) => (
                <div
                    className="bg-blue-600 text-white px-3 py-2 cursor-pointer"
                    onClick={() => confirmConferenceAttendance(row.id)}
                >
                    {row.congress_confirmation == 0 ? "Approve" : "Cancel"}
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
                <DataTable columns={columns} data={list} pagination />
            )}
        </div>
    );
}

export default ConferenceList;
