import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import SubscriptionForm from "@/Components/SubscriptionForm";

function Payment({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Payment
                </h2>
            }
        >
            <Head title="Payment" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mt-10">
                                Please make payments via the following processes below:
                            </div>

                            <div className="font-bold my-8 text-xl">
                                BANK NAME: NBC Bank <br />
                                BANK BRANCH: Muhimbili branch
                                <br />
                                ACCOUNT NAME: PAEDIATRIC ASSOCIATION OF TANZANIA
                                <br />
                                BANK ACCOUNT: 041103002213
                            </div>

                            <SubscriptionForm />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Payment;
