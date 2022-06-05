function Header() {
    return (
        <ul className="flex ml-auto w-full font-bold">
            <li className="text-base text-gray-800 ml-auto mr-6 border-b-2 border-green-400 cursor-pointer">Weather</li>
            <li className="text-base text-gray-800 mr-6 border-b-2 cursor-pointer hover:border-green-400 alert-notice">
                Alerts
            </li>
            <li className="text-base text-gray-800 mr-6 border-b-2 cursor-pointer hover:border-green-400">Map</li>
            <li className="text-base text-gray-800 mr-6 border-b-2 cursor-pointer hover:border-green-400">Satelite</li>
            <li className="text-base text-gray-800 border-b-2 cursor-pointer hover:border-green-400">News</li>
        </ul>
    );
}

export default Header;
