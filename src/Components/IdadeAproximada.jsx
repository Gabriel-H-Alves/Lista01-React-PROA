function IdadeAproximada() {
    let anoNascimento = 2006
    const idade2 = new Date().getFullYear() - anoNascimento
    return ( <>
    <p>Idade aproximada: {idade2}</p> 
    
    </>  );
}

export default IdadeAproximada;