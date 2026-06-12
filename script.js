function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "🌱 A biodiversidade é essencial para a agricultura: protege polinizadores, melhora a fertilidade do solo e mantém o equilíbrio ambiental.";
}

function mostrarCuriosidade() {
    const curiosidades = [
        "🐝 Abelhas polinizam mais de 70% das plantas cultivadas no mundo.",
        "🌳 Florestas fragmentadas ajudam a conservar espécies nativas próximas às lavouras.",
        "🪱 Minhocas ajudam a aerar o solo e aumentar sua fertilidade naturalmente.",
        "🦋 Borboletas e insetos são importantes indicadores da saúde do ecossistema agrícola.",
        "💧 Preservar matas ciliares garante água limpa para irrigação e consumo."
    ];

    let numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
    curiosidades[numero];
}