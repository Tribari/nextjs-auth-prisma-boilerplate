type Props = {
    children: React.ReactNode,
}

export default function PageTitle({children}: Props) {
    return (
        <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-sky-200"></div>
            <h1 className="flex-shrink mx-4 text-3xl font-bold uppercase text-sky-600">{children}</h1>
            <div className="flex-grow border-t border-sky-200"></div>
        </div>
    );
}

export function Paragraph({children}: Props) {
    return (
        <p className="py-2 text-sky-900">
            {children}
        </p>
    );
}
