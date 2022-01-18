type Props = {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function DefaultButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-gray-700 bg-gray-100 hover:bg-gray-200 border rounded border-gray-300">
            {children}
        </button>
    );
}

export function InformationButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-blue-700 bg-blue-100 hover:bg-blue-200 border rounded border-blue-300">
            {children}
        </button>
    );
}

export function SuccessButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-green-700 bg-green-100 hover:bg-green-200 border rounded border-green-300">
            {children}
        </button>
    );
}

export function WarningButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-yellow-700 bg-yellow-100 hover:bg-yellow-200 border rounded border-yellow-300">
            {children}
        </button>
    );
}

export function AlertButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-red-700 bg-red-100 hover:bg-red-200 border rounded border-red-300">
            {children}
        </button>
    );
}

export function CriticalButton({children, onClick}: Props) {
    return (
        <button onClick={onClick} className="py-2 px-4 mt-1 text-white bg-red-500 hover:bg-red-700 border rounded border-red-700">
            {children}
        </button>
    );
}