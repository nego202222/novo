
import ItemFormulario from './ItemFormulario';

function Contato() {
  

  return (
    <div>
    <ItemFormulario name="nome" label="nome" type="text" ph="digite seu nome" />
    <ItemFormulario name="nome" label="e-mail" type="email" ph="digite seu e-mail" />
    <ItemFormulario name="nome" label="text" type="textarea" ph="digite seu texto aqui"  />
   
    </div>
  );
}

export default Contato;