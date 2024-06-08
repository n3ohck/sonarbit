'use client'

import {useState, useRef, Fragment} from 'react'
import type {StaticImageData} from 'next/image'
import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/image'
import Link from "next/link";

interface ModalVideoProps {
    thumb: StaticImageData
    thumbWidth: number
    thumbHeight: number
    thumbAlt: string
    video: string
    videoWidth: number
    videoHeight: number
}

export default function ModalVideo({
                                       thumb,
                                       thumbWidth,
                                       thumbHeight,
                                       thumbAlt,
                                       video,
                                       videoWidth,
                                       videoHeight,
                                   }: ModalVideoProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div>

            {/* Video thumbnail */}
            <div>
                <div className="relative  flex justify-center " data-aos="zoom-y-out" data-aos-delay="450">
                    <div className="flex flex-col justify-center">
                        <div className='music-card playing'>
                            <div className='image'></div>
                            <div className='info'>
                                <img className="logo" src="https://logolook.net/wp-content/uploads/2021/06/MrBeast-Logo.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <Link href="/view"
                          className="absolute fix top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg">
                        <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"/>
                            <path d="M10 17l6-5-6-5z"/>
                        </svg>
                        <span className="ml-3">Descubre y conéctate con tus influencers favoritos ahora</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}