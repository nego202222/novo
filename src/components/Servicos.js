import ItemServico from "./ItemServicos"


function  Servicos(){
    return(
    <div className="item">

        <hr></hr>

       <ItemServico nome={"computador show"}   imagem={'https://m.media-amazon.com/images/I/61FueTyma+L._AC_SX679_.jpg'} descricao={'" PC Gamer Completo AMD 6-Core CPU 3.8Ghz 8GB (Placa de vídeo Radeon R5 2GB) SSD 120GB"'} />

       <ItemServico nome={"computador show"}   imagem={'https://cdn.dooca.store/2147/products/pc-i3-1660-super-1_640x640+fill_ffffff.jpg?v=1660402576&webp=0'} descricao={'""'} />

       <ItemServico nome={"computador show"}   imagem={'https://proinforj.com.br/wp-content/uploads/2022/11/pc-gamer.jpg'} descricao={'" PC Gamer Ryzen 5. Brinde: estabilizador e kit multimídia. - Proinfo"'} />

    </div>
    
    )
    
    }
    export default Servicos