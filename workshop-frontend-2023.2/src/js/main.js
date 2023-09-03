const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');


botao.addEventListener('click', () => {
    const randomCharacterId = Math.floor(Math.random() * 83) + 1;

    fetch(`https://swapi.dev/api/people/${randomCharacterId}/`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = "Nome do personagem: " + data.name;
        document.getElementById('mass').textContent = "Massa/Peso: " + data.mass;
        document.getElementById('desc').textContent = "Cor do cabelo: " + data.hair_color;
        document.getElementById('skin_color').textContent = "Cor da pele: " + data.skin_color;
        document.getElementById('eye_color').textContent = "Cor dos olhos: " + data.eye_color;
        document.getElementById('birth_year').textContent = "Ano de nascimento: " + data.birth_year;
    })
    .catch(error => {
        console.error("Ocorreu um erro ao buscar os dados da API:", error);
        alert('Erro inesperado, tente novamente mais tarde!');
    });
});
