document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotals);
});

function calculateTotals() {
    const genres = {
        "racing": "Jogos de Corrida",
        "action": "Jogos de Ação",
        "shooting": "Jogos de Tiro",
        "adventure": "Jogos de Aventura",
        "platform": "Jogos de Plataforma",
        "rpg": "Jogos de RPG",
        "mmorpg": "Jogos de MMORPG",
        "strategy": "Jogos de Estratégia",
        "sports": "Jogos de Esporte",
        "simulation": "Jogos de Simulação",
        "board": "Jogos de Tabuleiro Eletrônico",
        "cards": "Jogos de Cartas",
        "puzzle": "Jogos de Quebra-cabeça",
        "moba": "Jogos de MOBA",
        "browser": "Jogos de Navegador",
        "fantasy": "Jogos de Fantasia"
    };

    let total = 0;
    const genreCounts = {};

    for (const genre in genres) {
        const count = parseInt(document.getElementById(genre).value) || 0;
        genreCounts[genre] = count;
        total += count;
    }

    document.getElementById('total').innerText = total;
    displayResults(genreCounts, total, genres);
}

function displayResults(genreCounts, total, genres) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    for (const genre in genreCounts) {
        const count = genreCounts[genre];
        const percentage = total ? ((count / total) * 100).toFixed(2) : 0;

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${percentage}%`;
        progressBar.innerText = `${percentage}%`;

        progressBarContainer.appendChild(progressBar);

        resultItem.innerHTML = `
            <strong>${genres[genre]}:</strong> ${count} (${percentage}%)
        `;
        resultItem.appendChild(progressBarContainer);

        resultsContainer.appendChild(resultItem);
    }
}

calculateTotals();
