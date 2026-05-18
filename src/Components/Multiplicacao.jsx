function Multiplicacao() {
     let valor = [10, 20]
    return ( <>
    
    <p>Multiplicação: {valor.reduce((total, valor) => total * valor, 1 )}</p>
    
    </>  );
}

export default Multiplicacao;