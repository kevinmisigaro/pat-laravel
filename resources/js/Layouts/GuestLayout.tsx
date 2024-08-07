import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <img src="/images/pat-logo.png" className="w-1/2" />
                </Link>
            </div>

            <div className="w-full px-20">
                <div className="mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
