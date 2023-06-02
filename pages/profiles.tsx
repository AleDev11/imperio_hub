import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}


const Profiles = () => {
    const router = useRouter()
    const { data: user } = useCurrentUser()
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl font-semibold text-center text-white md:text-6xl">Profiles</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div
                                className="
                                w-44
                                h-44
                                rounded-md
                                items-center
                                justify-center
                                border-2
                                border-transparent
                                group-hover:border-white
                                group-hover:cursor-pointer
                                overflow-hidden
                                transition"
                            >
                                <img src="/images/Imperio_logo.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="
                                mt-4
                                text-center
                                text-gray-400
                                text-2xl
                                group-hover:text-white
                                group-hover:cursor-pointer
                                transition
                                "
                            >
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles