import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {
    sitename: string,
    menuEntries: {name: string, url: string}[]
}

export default function NavbarComponent({sitename, menuEntries}: Props) {
    const { data: session } = useSession();

    return (
        <nav className="p-4 text-white bg-sky-600">
            <div className="md:flex">
                <div className="flex-shrink-0 py-2 md:px-2 md:pr-4 font-extrabold tracking-widest uppercase">
                    <Link href="/">
                        <a>{sitename}</a>
                    </Link> 
                </div>
                <div className="flex-auto md:flex">
                    <div className="md:hidden pt-2 flex-grow border-t border-sky-400"></div>
                    {menuEntries && menuEntries.map( (entry, index) => (
                        <div key={index} className="py-2 md:px-2 hover:text-pink-200">
                            <Link href={entry.url}>
                                <a>{entry.name}</a>
                            </Link>
                        </div>
                    ))}
                    <div className="md:hidden flex-grow border-t border-sky-400"></div>
                </div>
                <div className="flex-shrink-0">
                    <div className="pt-2 md:p-2 hover:text-pink-200">
                        {session && 
                            <button onClick={() => signOut()}>
                                Sign out
                            </button>
                        }
                        {!session && 
                            <button onClick={() => signIn()}>
                                Sign in
                            </button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}