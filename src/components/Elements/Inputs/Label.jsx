const Label = (props) => {
    const { htmlfor, children } = props;
    return (
        <label 
            htmlFor={htmlfor}
            className="block text-sm font-bold mb-2 text-slate-700"
        >
            {children}
        </label>
    );
}

export default Label;