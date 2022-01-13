import NavbarComponent from "./navbar";

type Props = {
    children: React.ReactNode,
    sitename: string,
    mainMenu: {name: string, url: string}[]
}

export default function LayoutComponent({ children, sitename, mainMenu }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-pink-300">
             <main className="container mx-auto py-4">
                <header>
                    <NavbarComponent sitename={sitename} menuEntries={mainMenu}/>
                </header>
                
                <div className="p-4 bg-white shadow">
                    {children}
                </div>
            </main>
        </div>
    );
}