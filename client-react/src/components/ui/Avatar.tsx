import React from 'react';
// import Image from 'next/image';

const Avatar: React.FC<{ width?: string, height?: string, fill?: string }> = ({ width = "40px", height = "40px", fill = "#000000" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 -0.5 1025 1025"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M295.073941 558.635333c-0.058157-16.724166-0.506793-32.912461-0.581566-48.402877-1.046818 16.994179-0.84327 33.116009 0.581566 48.402877zM544.021419 777.146158l-0.124621 0.012462c0.04154-0.008308 0.070619 0 0.124621-0.012462z" fill="#B6E7FC"></path>
                <path d="M511.86084 0.04154C229.967668 0.04154 1.528687 228.476368 1.528687 510.490006c0 188.418958 102.073077 352.985416 253.93648 441.420779 15.340871-43.189556 40.323269-78.382585 71.457801-105.487698 24.683307-21.696552 53.832208-38.811198 86.466348-50.521437-59.332157-51.659645-61.068546-65.725225-40.692979-63.785288a194.83695 194.83695 0 0 1-47.218975-53.105251c-261.683766-19.644456-45.569822-533.441079 186.736571-411.324757 98.143355-51.609796 192.41099 9.662298 249.624587 99.385413 78.968305 122.643884 88.70953 298.555027-57.807624 311.715026-13.384318 22.240732-30.594506 40.759443-50.35943 55.581059 10.10678 3.402159 5.79904 20.005858-28.534103 61.78304h-0.261704c32.538597 11.760088 61.600263 28.899658 86.204643 50.604519 27.254658 23.819267 49.761248 53.86544 65.189354 90.04713 0.137083 0.324015 0.261705 0.660492 0.402942 0.984508 1.021894 2.421805 2.047942 4.839457 3.007525 7.319419 145.615727-89.914201 242.629183-250.924801 242.629183-434.616462 0.004154-282.013639-228.438981-510.448466-510.448466-510.448466z" fill="#B6E7FC"></path>
            </g>
        </svg>
    );
};

export default Avatar;

{/* <svg width="64px" height="64px" viewBox="0 -0.5 1025 1025" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M295.073941 558.635333c-0.058157-16.724166-0.506793-32.912461-0.581566-48.402877-1.046818 16.994179-0.84327 33.116009 0.581566 48.402877zM544.021419 777.146158l-0.124621 0.012462c0.04154-0.008308 0.070619 0 0.124621-0.012462z" fill="#B6E7FC"></path><path d="M511.86084 0.04154C229.967668 0.04154 1.528687 228.476368 1.528687 510.490006c0 188.418958 102.073077 352.985416 253.93648 441.420779 15.340871-43.189556 40.323269-78.382585 71.457801-105.487698 24.683307-21.696552 53.832208-38.811198 86.466348-50.521437-59.332157-51.659645-61.068546-65.725225-40.692979-63.785288a194.83695 194.83695 0 0 1-47.218975-53.105251c-261.683766-19.644456-45.569822-533.441079 186.736571-411.324757 98.143355-51.609796 192.41099 9.662298 249.624587 99.385413 78.968305 122.643884 88.70953 298.555027-57.807624 311.715026-13.384318 22.240732-30.594506 40.759443-50.35943 55.581059 10.10678 3.402159 5.79904 20.005858-28.534103 61.78304h-0.261704c32.538597 11.760088 61.600263 28.899658 86.204643 50.604519 27.254658 23.819267 49.761248 53.86544 65.189354 90.04713 0.137083 0.324015 0.261705 0.660492 0.402942 0.984508 1.021894 2.421805 2.047942 4.839457 3.007525 7.319419 145.615727-89.914201 242.629183-250.924801 242.629183-434.616462 0.004154-282.013639-228.438981-510.448466-510.448466-510.448466z" fill="#B6E7FC"></path><path d="M326.927122 846.427241c-31.134532 27.100959-56.11693 62.293988-71.457801 105.487699l0.008308 0.004154c14.983623-41.561173 39.459228-77.373154 71.449493-105.491853zM779.630274 945.135546l0.054003-0.033232c-0.955429-2.479962-1.985631-4.897613-3.007525-7.319419 1.034356 2.421805 1.989785 4.889305 2.953522 7.352651zM543.535397 777.196007a1.561919 1.561919 0 0 0 0.361401-0.037387l0.124621-0.012462c8.557323-1.790391 89.054315-49.715554 109.650047-42.778306 19.764924-14.821616 36.975112-33.340327 50.35943-55.581059-4.968232 0.444482-10.094318 0.726957-15.428106 0.789268 34.736085-50.396816 52.278597-112.333556 41.91842-193.58243l-215.951936 1.05928h-2.592121v-0.012462l-215.24575-1.046818a372.563408 372.563408 0 0 0-2.239028 24.234671c0.074773 15.490416 0.519255 31.674557 0.581566 48.402877 4.399129 47.231438 20.014166 86.757131 43.575882 120.940728a209.27224 209.27224 0 0 1-13.168307-0.569104 194.778793 194.778793 0 0 0 47.218975 53.105251c31.599784 3.007525 116.3879 44.518849 121.97093 44.01621 19.78154 2.484116 28.845655 1.657462 48.863976 1.071743zM776.27381 936.802541c-15.43226-36.181691-37.93885-66.22371-65.189354-90.04713 27.89438 24.60438 50.085263 55.032725 65.189354 90.04713z" fill="#FCE9EA"></path><path d="M776.27381 936.802541c-15.10409-35.014405-37.299127-65.44275-65.189354-90.04713-24.60438-21.70486-53.666046-38.84443-86.204643-50.604519l-211.336798-0.116313a4.041881 4.041881 0 0 0-0.145391-0.128775c-32.63414 11.710239-61.783041 28.824885-86.466348 50.521437-31.994418 28.122852-56.465869 63.934833-71.449493 105.491853 75.337674 43.870819 162.913151 69.019379 256.383211 69.019378 98.222282 0 189.931028-27.753143 267.76528-75.798772a237.930963 237.930963 0 0 0-2.953522-7.352651l-0.402942-0.984508z" fill="#3B9CBD"></path><path d="M624.879813 796.150892h0.261704c34.337297-41.777183 38.640882-58.380882 28.534103-61.78304-20.595732-6.937247-101.096878 40.987915-109.650047 42.778306-0.054003 0.012462-0.083081 0.004154-0.124621 0.012462a1.541149 1.541149 0 0 1-0.361401 0.037387c-20.014166 0.589874-29.082436 1.412374-48.863976-1.063435-5.58303 0.502639-90.371146-41.008685-121.97093-44.01621-20.371413-1.939937-18.639179 12.129798 40.692979 63.785288a4.041881 4.041881 0 0 0 0.145391 0.128775l211.336798 0.120467z" fill="#C9CACA"></path><path d="M761.83852 367.071767c-57.213596-89.723115-151.481232-150.995209-249.624587-99.385413 97.499479-51.256703 191.991432 9.87 249.624587 99.385413z" fill="#C4BFFF"></path><path d="M295.073941 558.635333c-1.420682-15.291022-1.628384-31.412852-0.581566-48.402877 0.486023-7.900985 1.183901-15.943206 2.239028-24.234671l215.24575 1.046818V267.686354h0.23678c-232.306393-122.116321-448.416183 391.676147-186.736571 411.324757 4.262045 0.319861 8.652866 0.515101 13.168307 0.569104-23.557562-34.187751-39.176754-73.70929-43.571728-120.944882z" fill="#C4BFFF"></path><path d="M511.981307 487.044603v0.012462h2.592121l215.951936-1.05928c10.360176 81.248873-7.182336 143.185613-41.91842 193.58243a200.797998 200.797998 0 0 0 15.428106-0.789268c146.517154-13.16 136.775929-189.071142 57.807624-311.715026-57.633154-89.515413-152.125108-150.642116-249.624587-99.385413h-0.23678v219.354095z" fill="#B2ABFF"></path></g></svg> */ }

