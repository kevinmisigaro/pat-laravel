import { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;
}

const InfoCard: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-[#202abd]">
            <div className="font-bold text-xl bg-[#202abd] mb-2 p-4 text-white">{title}</div>
            <div className="p-5">
            {children}
            </div>
        </div>
    );
};

export default InfoCard;
