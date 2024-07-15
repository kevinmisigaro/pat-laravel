function CardItem({
    avatar,
    name,
    cardNumber,
    expiryDate,
}: {
    avatar: string;
    name: string;
    cardNumber: string;
    expiryDate: string;
}) {
    return (
        <div className="max-w-sm mx-auto bg-[#202abd] rounded-xl shadow-md overflow-hidden md:max-w-2xl px-10 pt-8 text-white">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img
                        className="h-28 w-full object-cover rounded-full w-28"
                        src={avatar}
                        alt="User avatar"
                    />
                </div>
                <div className="px-8 pb-8">
                    <div className="uppercase tracking-wide text-sm font-semibold">
                        Paediatrics Association of Tanzania
                    </div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium">
                        {name}
                    </h1>
                    <p className="mt-2">Card Number: {cardNumber}</p>
                    <p className="mt-2">Expiry Date: {expiryDate}</p>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
