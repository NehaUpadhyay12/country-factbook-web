interface ErrorPanelProps {
    message: string;
}

export const ErrorPanel = (props: ErrorPanelProps) => {
    return (
        <div className="error-panel">{props.message}</div>
    )
}