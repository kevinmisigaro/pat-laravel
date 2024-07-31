import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>You're logged in!</div>

                            {auth.user.pat_member == 1 ? (
                                <div className="mt-10">
                                    {auth.user.pat_member_confirmation == 1
                                        ? "Your payment for membership has been confirmed"
                                        : "You have not yet paid for your membership"}
                                </div>
                            ) : (
                                ""
                            )}

                            <div className="mt-5">
                                {auth.user.congress_confirmation == 1
                                    ? "Your payment for the conference has been confirmed"
                                    : "You have not yet paid for your conference attendance"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
