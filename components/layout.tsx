
type Props = {
    children: React.ReactNode
}

export default function LayoutComponent({ children }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-pink-300">
             <main className="container mx-auto py-4">
                <header>

                </header>
                
                <div className="p-4 bg-white shadow">
                    {children}
                </div>
            </main>
        </div>
    );
}