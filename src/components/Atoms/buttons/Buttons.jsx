import "./_buttons.scss";

const ButtonPrimary = (props) => {
    const {label} = props;

    return(
        <>
            <button className="button__primary">{label}</button>
        </>
    );
};

const ButtonSecondary = (props) => {
    const {label} = props;

    return (
        <>
            <button className="button__secondary">{label}</button>
        </>
    );
};

export {ButtonPrimary, ButtonSecondary};
