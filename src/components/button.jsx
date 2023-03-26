const Button=(props)=>{
    return(
        <button onClick={props.onClick} style={props.style}>{props.name}</button>
    )
}

export default Button;