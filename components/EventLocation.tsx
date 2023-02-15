const EventLocation = () => {
    return (
        <div className="flex flex-col text-center">
            <div className="p-5">
                <div className="font-light text-3xl mb-10">Lokasi Acara</div>
                <div className="font-light text-2xl mb-5">Pemberkatan</div>
                <div>Selasa, 4 Oktober 2023</div>
                <div className="mb-5">Pukul 09:00 - 12:00 WIB</div>
                <div className="font-semibold mb-2">Alamat</div>
                <div className="text-gray-700 text-sm">
                    Jl. Soekarno Hatta No.280, Tunggurono, Kec. Binjai Tim.,
                    Kota Binjai, Sumatera Utara 20351
                </div>
            </div>
            <div className="mb-20">
                <iframe
                    className="w-full h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.8695960535676!2d98.51557976146424!3d3.607262849850488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303129d5381c963b%3A0x50e2b85b8b5b1299!2sGMAHK%20Sinai%20Binjai!5e0!3m2!1sen!2sid!4v1676434745650!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="p-5">
                <div className="text-2xl font-light mb-5">Resepsi & Adat</div>
                <div className="text-gray-700 font-semibold mb-2">
                    Selasa, 4 Oktober 2023
                </div>
                <div className="mb-5 font-semibold text-gray-700">
                    Pukul 12:00 - Selesai
                </div>
                <div className="mb-2 font-semibold text-gray-700">Alamat</div>
                <div className="text-gray-700 text-sm">
                    Jl. Insinyur H. Juanda, Mencirim, Kec. Binjai Tim., Kota
                    Binjai, Sumatera Utara 20351
                </div>
            </div>
            <div className="mb-5">
                <iframe
                    className="w-full h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9503298339546!2d98.49725591585548!3d3.5988552512242986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303129c6356a1aff%3A0x127d71deddb302d0!2sTomuria%20Hall!5e0!3m2!1sen!2sid!4v1676434880310!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="flex justify-center">
                <button className="flex items-center bg-black text-white px-5 py-3 rounded hover:bg-gray-900 text-sm font-semibold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                    </svg>
                    Simpan Kalender
                </button>
            </div>
        </div>
    )
}

export default EventLocation
