
function ItemFormulario(props) {
    return (
        <p>
            <label for={props.name}>{props.label}: </label>
            <input type={props.type} name={props.name} id={props.name} placeholder={props.ph}></input>
        </p>









    )

}
export default ItemFormulario;