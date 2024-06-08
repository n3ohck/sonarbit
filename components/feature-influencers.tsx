import kaleb from '@/public/images/kaleb.jpg'
import Image from "next/image";

export default function FeatureInfluencers() {
    return (
        <section className="relative">

            <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-300 pointer-events-none mrlogo"
                 aria-hidden="true">
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-20">
                <div className="py-12 md:py-20">
                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <Image src={kaleb} width={333} alt="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   title="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   className="rounded shadow-xl w-full p0"/>
                            <h4 className="text-xl text-left w-full font-bold leading-snug tracking-tight mb-1 mt-5">@Kira
                                ./React Master</h4>
                            <p className="text-gray-600 text-left mt-5">
                                ¡Conozcan a Kira, el programador que dice saber React! Kira es el tipo de persona que,
                                cuando le preguntas si sabe React, te lanza una mirada confiada y responde: "¿React?
                                ¡Claro! Es como el pan con mantequilla de mi desayuno... aunque a veces termino
                                embadurnando todo de mantequilla."
                            </p>

                            <div>
                                <ul className="flex mb-4 mt-10 md:order-1 md:ml-4 md:mb-0">
                                    <li>
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Twitter">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Github">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div
                        className="max-w-sm mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <Image src={kaleb} width={333} alt="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   title="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   className="rounded shadow-xl w-full p0"/>
                            <h4 className="text-xl text-left w-full font-bold leading-snug tracking-tight mb-1 mt-5">@Kira
                                ./React Master</h4>
                            <p className="text-gray-600 text-left mt-5">
                                ¡Conozcan a Kira, el programador que dice saber React! Kira es el tipo de persona que,
                                cuando le preguntas si sabe React, te lanza una mirada confiada y responde: "¿React?
                                ¡Claro! Es como el pan con mantequilla de mi desayuno... aunque a veces termino
                                embadurnando todo de mantequilla."
                            </p>

                            <div>
                                <ul className="flex mb-4 mt-10 md:order-1 md:ml-4 md:mb-0">
                                    <li>
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Twitter">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Github">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div
                        className="max-w-sm mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                            <Image src={kaleb} width={333} alt="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   title="SonarBit: Conciertos en Vivo y Musica Sin Limites"
                                   className="rounded shadow-xl w-full p0"/>
                            <h4 className="text-xl text-left w-full font-bold leading-snug tracking-tight mb-1 mt-5">@Kira
                                ./React Master</h4>
                            <p className="text-gray-600 text-left mt-5">
                                ¡Conozcan a Kira, el programador que dice saber React! Kira es el tipo de persona que,
                                cuando le preguntas si sabe React, te lanza una mirada confiada y responde: "¿React?
                                ¡Claro! Es como el pan con mantequilla de mi desayuno... aunque a veces termino
                                embadurnando todo de mantequilla."
                            </p>

                            <div>
                                <ul className="flex mb-4 mt-10 md:order-1 md:ml-4 md:mb-0">
                                    <li>
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Twitter">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Github">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#0"
                                           className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                           aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}