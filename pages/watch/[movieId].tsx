import React from "react";
import { useRouter } from "next/router";

import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data, error } = useMovie(movieId as string);


    if (error) {
        return (
            <div className="h-screen w-screen bg-black flex flex-row justify-center items-center">
                <div className="bg-red-900 bg-opacity-60 rounded-md p-10 lg:p-15">
                    <p className="text-white text-3xl font-bold text-center">Error</p>
                    <button
                        onClick={() => router.push('/')}
                        className="
                            bg-white
                            text-white
                            bg-opacity-30
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex
                            flex-row
                            items-center
                            hover:bg-opacity-20
                            transition
                            mt-4
                            ">
                        Go Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen bg-black">
            <nav
                className="
                    fixed
                    w-full
                    p-4
                    z-10
                    flex
                    flex-row
                    items-center
                    gap-8
                    bg-black
                    bg-opacity-70
                ">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer hover:text-opacity-30 transition" size={40} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <samp className="font-light mr-1">
                        Watching:
                    </samp>
                    {data?.title}
                </p>
            </nav>
            <video autoPlay controls className="h-full w-full" src={data?.videoUrl} />
        </div>
    )
}

export default Watch;