import "./Boton.css"
export default function Boton ({clickHandle, name, gray, aqua, pink, wide}){

    const handleClick = () =>  clickHandle(name)

    const className = [
        "component-button",
        gray ? "gray" : "", 
        aqua ?  "aqua" : "",
        pink ? "pink" : "",
        wide ? "wide" : "",
    
    ]

    return(
        <div className={className.join(" ").trim()}>
            <button className="btn" onClick={handleClick}>{name}</button>
        </div>
    )



}