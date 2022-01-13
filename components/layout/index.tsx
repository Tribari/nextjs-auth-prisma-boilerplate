import NavbarComponent from "./navbar";

type Props = {
    children: React.ReactNode,
    sitename: string,
    mainMenu: {name: string, url: string}[]
}

export default function LayoutComponent({ children, sitename, mainMenu }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-pink-300">
             <div className="container mx-auto py-4">
                <header>
                    <NavbarComponent sitename={sitename} menuEntries={mainMenu}/>
                </header>
                
                <main className="p-4 md:p-6 bg-white">
                    {children}
                </main>

                <footer>

                </footer>
            </div>
        </div>
    );
}