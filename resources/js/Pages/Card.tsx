import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CardItem from '@/Components/Card';

function Card({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Card
                </h2>
            }
        >
            <Head title="Card" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            
                            <CardItem 
                            avatar="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            name="Kevin Misigaro"
                            cardNumber="1234-2234-1233"
                            expiryDate="02-07-2025"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default Card