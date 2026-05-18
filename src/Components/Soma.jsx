function Soma() {
      let valores = [10, 20]
    return (  
        <>
        <p>Soma: {valores.reduce((total, valor) => total + valor, 0)}</p>
        
        </>
    );
}

export default Soma;