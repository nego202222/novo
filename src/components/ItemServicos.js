function ItemServicos({ nome,imagem,descricao  }) {
    return (
      <div className="">
  
        <h1> {nome}</h1>
        <img src={imagem} ></img>
         <p>{descricao}</p>

      </div>







    )
  
  }
  export default  ItemServicos;