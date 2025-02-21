import PrimaryButton from "./PrimaryButton"

const SecondaryButton = ({
    onClick,
    children,
    className = ""
}: {
    onClick: () => void,
    children: React.ReactNode,
    className?: string
}) => {

    return (
        <PrimaryButton onClick={onClick} className={`bg-disabled hover:bg-active active:bg-hover ${className}`}>
            {children}
        </PrimaryButton>
    )
}
export default SecondaryButton