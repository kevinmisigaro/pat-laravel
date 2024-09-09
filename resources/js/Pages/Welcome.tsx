import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Countdown from "@/Components/Countdown";
import InfoCard from "@/Components/InfoCard";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`October 17, ${currentYear} 00:00:00`);

    return (
        <>
            <Head title="Welcome" />
            <div
                className="h-screen"
                style={{
                    backgroundColor: "/images/banner1.jpg",
                }}
            >
                {/* <img id="background" className="absolute -left-20 top-0 max-w-[877px]" /> */}
                <div className="relative flex flex-col items-start justify-center">
                    <div className="relative w-full bg-[#202abd]">
                        <header className="flex items-center justify-between mt-2 bg-[#202abd]">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <img
                                    src="/images/pat-logo.png"
                                    className="w-3/12"
                                />
                            </div>
                            <nav className="mx-3 flex flex-1 justify-end ">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        {/* <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link> */}
                                        <Link
                                            href={route("register")}
                                            className="text-white hover:underline"
                                        >
                                            Membership Registration
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                    </div>

                    <main className="mt-5 w-full">
                        <div className="flex flex-col items-center justify-center">
                            <p className="mb-5 text-2xl mt-4 font-bold text-[#202abd]">
                                Countdown to the 24<sup>th</sup> PAT SCIENTIFIC
                                CONFERENCE
                            </p>
                            <Countdown targetDate={targetDate} />
                            <div className="my-5">
                                <a
                                    href="https://conference2024.paediatrics.or.tz"
                                    target="_blank"
                                    className="text-[#202abd] hover:underline"
                                >
                                    Find out more
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-10 px-20 items-center">
                            <div className="flex flex-col gap-y-10">
                                <InfoCard title="Member Registration">
                                    <div className="flex flex-row justify-between">
                                        <Link
                                            onClick={() =>
                                                localStorage.setItem("pat", "1")
                                            }
                                            href={route("login")}
                                            className="hover:text-[#202abd] hover:underline"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            onClick={() =>
                                                localStorage.setItem("pat", "1")
                                            }
                                            href={route("register")}
                                            className="hover:text-[#202abd] hover:underline"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </InfoCard>

                                <InfoCard title="Conference Registeration">
                                    <div className="flex flex-row justify-between">
                                        <Link
                                            onClick={() =>
                                                localStorage.setItem("pat", "0")
                                            }
                                            href={route("login")}
                                            className="hover:text-[#202abd] hover:underline"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            onClick={() =>
                                                localStorage.setItem("pat", "0")
                                            }
                                            href={route("register")}
                                            className="hover:text-[#202abd] hover:underline"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </InfoCard>
                            </div>

                            <div className="flex flex-col gap-y-8 items-center justify-center bg-[#202abd] text-white max-w-fit py-8 px-20">
                                <div className="basis-1/3 font-bold text-xl">
                                    Conference details
                                </div>
                                <div className="basis-1/3 flex flex-col items-center justify-center">
                                    <FaLocationDot className="text-3xl" />
                                    <div className="font-bold text-2xl">
                                        Mbeya
                                    </div>
                                    <div className="text-base">
                                        EDEN HIGHLANDS HOTEL
                                    </div>
                                </div>

                                <div className="basis-1/3 flex flex-col gap-y-2 items-center justify-center mt-5">
                                    <FaCalendarDays className="text-3xl" />
                                    <div className="font-bold text-2xl text-center">
                                        17<sup>th</sup> - 19<sup>th</sup>{" "}
                                        October
                                    </div>
                                    <div className="text-base">Event date</div>
                                </div>
                            </div>

                            <InfoCard title="Abstract Submission">
                                <div>
                                    <Link className="hover:underline" href={route("guestabstract")}>
                                        Submit New Abstract
                                    </Link>
                                </div>
                            </InfoCard>

                            <InfoCard title="Announcements">
                                <div>No Announcements for now</div>
                            </InfoCard>
                        </div>
                    </main>

                    <div className="flex justify-center items-center w-full py-16">
                        <footer className="text-center text-sm text-[#202abd]">
                            Paediatrics Association of Tanzania
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
