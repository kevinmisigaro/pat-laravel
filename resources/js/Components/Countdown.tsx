import { useEffect, useState } from "react";

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
}

function Countdown({ targetDate }: CountdownProps) {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="grid grid-flow-col gap-x-10 text-center auto-cols-max">
            <div className="flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    {timeLeft.days}
                </span>
                days
            </div>
            <div className="flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    {timeLeft.hours}
                </span>
                <span> hours</span>
            </div>
            <div className="flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    {timeLeft.minutes}
                </span>
                min
            </div>
        </div>
    );
}

export default Countdown;
