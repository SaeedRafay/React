function Button(props) {
    const {count, setCount} = props;
    return (
        <button onClick={() => setCount(count + 1)}>Add 1!</button>
    )
}

export default Button;
