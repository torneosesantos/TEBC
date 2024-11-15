const gameBoard = document.getElementById('game-board');
const recentCardsDiv = document.getElementById('recent-cards');
const coinsDiv = document.getElementById('coins');
const cardCounterDiv = document.getElementById('card-counter');
const resetButtonDiv = document.getElementById('reset-button');


// Contadores de rarezas
const commonCounterDiv = document.getElementById('common-counter');
const rareCounterDiv = document.getElementById('rare-counter');
const epicCounterDiv = document.getElementById('epic-counter');
const legendaryCounterDiv = document.getElementById('legendary-counter');

const cardImages = [
    { name: 'rara14.jpg', rarity: 'rara' },
    { name: 'comun2.jpg', rarity: 'común' },
    { name: 'comun3.jpg', rarity: 'común' },
    { name: 'comun4.jpg', rarity: 'común' },
    { name: 'comun5.jpg', rarity: 'común' },
    { name: 'comun6.jpg', rarity: 'común' },
    { name: 'comun7.jpg', rarity: 'común' },
    { name: 'comun8.jpg', rarity: 'común' },
    { name: 'comun9.jpg', rarity: 'común' },
    { name: 'comun10.jpg', rarity: 'común' },
    { name: 'comun11.jpg', rarity: 'común' },
    { name: 'comun12.jpg', rarity: 'común' },
    { name: 'comun13.jpg', rarity: 'común' },
    { name: 'comun14.jpg', rarity: 'común' },
    { name: 'comun15.jpg', rarity: 'común' },
    { name: 'comun16.jpg', rarity: 'común' },
    { name: 'comun17.jpg', rarity: 'común' },
    { name: 'comun18.jpg', rarity: 'común' },
    { name: 'comun19.jpg', rarity: 'común' },
    { name: 'comun20.jpg', rarity: 'común' },
    { name: 'comun21.jpg', rarity: 'común' },
    { name: 'comun22.jpg', rarity: 'común' },
    { name: 'comun23.jpg', rarity: 'común' },
    { name: 'comun24.jpg', rarity: 'común' },
    { name: 'comun25.jpg', rarity: 'común' },
    { name: 'comun26.jpg', rarity: 'común' },
    { name: 'comun27.jpg', rarity: 'común' },
    { name: 'comun28.jpg', rarity: 'común' },
    { name: 'comun29.jpg', rarity: 'común' },
    { name: 'comun30.jpg', rarity: 'común' },
    { name: 'comun31.jpg', rarity: 'común' },
    { name: 'comun32.jpg', rarity: 'común' },
    { name: 'comun33.jpg', rarity: 'común' },
    { name: 'comun34.jpg', rarity: 'común' },
    { name: 'comun35.jpg', rarity: 'común' },

    { name: 'comun36.jpg', rarity: 'común' },
    { name: 'comun37.jpg', rarity: 'común' },
    { name: 'comun38.jpg', rarity: 'común' },
    { name: 'comun39.jpg', rarity: 'común' },
    { name: 'comun40.jpg', rarity: 'común' },
    { name: 'comun41.jpg', rarity: 'común' },
    { name: 'comun42.jpg', rarity: 'común' },
    { name: 'comun43.jpg', rarity: 'común' },
    { name: 'comun44.jpg', rarity: 'común' },
    { name: 'comun45.jpg', rarity: 'común' },
    { name: 'comun46.jpg', rarity: 'común' },
    { name: 'comun47.jpg', rarity: 'común' },
    { name: 'comun48.jpg', rarity: 'común' },
    { name: 'comun49.jpg', rarity: 'común' },    

    { name: 'rara1.jpg', rarity: 'rara' },
    { name: 'rara2.jpg', rarity: 'rara' },
    { name: 'rara3.jpg', rarity: 'rara' },
    { name: 'rara4.jpg', rarity: 'rara' },
    { name: 'rara5.jpg', rarity: 'rara' },
    { name: 'rara6.jpg', rarity: 'rara' },
    { name: 'rara7.jpg', rarity: 'rara' },
    { name: 'rara8.jpg', rarity: 'rara' },
    { name: 'rara9.jpg', rarity: 'rara' },
    { name: 'rara10.jpg', rarity: 'rara' },
    { name: 'rara11.jpg', rarity: 'rara' },
    { name: 'rara12.jpg', rarity: 'rara' },
    { name: 'rara13.jpg', rarity: 'rara' },
    { name: 'rara15.jpg', rarity: 'rara' },
    { name: 'rara16.jpg', rarity: 'rara' },
    { name: 'rara17.jpg', rarity: 'rara' },
    { name: 'rara18.jpg', rarity: 'rara' },
    { name: 'rara19.jpg', rarity: 'rara' },
    { name: 'rara20.jpg', rarity: 'rara' },
    { name: 'rara21.jpg', rarity: 'rara' },
    { name: 'rara22.jpg', rarity: 'rara' },
    { name: 'rara23.jpg', rarity: 'rara' },
    { name: 'rara24.jpg', rarity: 'rara' },

    { name: 'epica1.jpg', rarity: 'épica' },
    { name: 'epica2.jpg', rarity: 'épica' },
    { name: 'epica3.jpg', rarity: 'épica' },
    { name: 'epica4.jpg', rarity: 'épica' },
    { name: 'epica5.jpg', rarity: 'épica' },
    { name: 'epica6.jpg', rarity: 'épica' },
    { name: 'epica7.jpg', rarity: 'épica' },
    { name: 'epica8.jpg', rarity: 'épica' },
    { name: 'epica9.jpg', rarity: 'épica' },
    { name: 'epica10.jpg', rarity: 'épica' },
    { name: 'epica11.jpg', rarity: 'épica' },
    { name: 'epica12.jpg', rarity: 'épica' },
    { name: 'epica13.jpg', rarity: 'épica' },
    { name: 'epica14.jpg', rarity: 'épica' },
    { name: 'epica15.jpg', rarity: 'épica' },
    { name: 'epica16.jpg', rarity: 'épica' },
    { name: 'epica17.jpg', rarity: 'épica' },
    { name: 'epica18.jpg', rarity: 'épica' },

    { name: 'legendaria1.jpg', rarity: 'legendaria' },
    { name: 'legendaria2.jpg', rarity: 'legendaria' },
    { name: 'legendaria3.jpg', rarity: 'legendaria' },
    { name: 'legendaria4.jpg', rarity: 'legendaria' },
    { name: 'legendaria5.jpg', rarity: 'legendaria' },
    { name: 'legendaria6.jpg', rarity: 'legendaria' },
    { name: 'legendaria7.jpg', rarity: 'legendaria' },
    { name: 'legendaria8.jpg', rarity: 'legendaria' },
    { name: 'legendaria9.jpg', rarity: 'legendaria' },
    { name: 'legendaria10.jpg', rarity: 'legendaria' },
];

const unlockedCards = new Set();
let totalCoins = 0;

const codes10 = new Set([
    "VBNM89O", "BNMK12P", "QWES34X", "ASDF98C", "ERTY56M", 
    "YUIO12S", "LKJH99V", "HGFDS45F", "EDCBA32A", "QAZWSX9"
]);

const codes15 = new Set([
    "ABCDE12", "FGHIJ34", "KLMNO56", "PQRST78", "UVWXY90", 
    "ZABCD11", "EFGHI22", "JKLMN33", "OPQRS44", "TUVWX55"
]);

document.addEventListener("DOMContentLoaded", () => {
    const savedCoins = localStorage.getItem('totalCoins');
    totalCoins = savedCoins ? parseInt(savedCoins, 10) : 0;
    coinsDiv.innerText = `🪙 ${totalCoins}`;

    const redeemedCodes = JSON.parse(localStorage.getItem('redeemedCodes')) || [];
    redeemedCodes.forEach(code => {
        codes10.delete(code);
        codes15.delete(code);

    // Cargar contadores de rarezas
    commonCounterDiv.innerText = `Comunes Desbloqueadas: ${localStorage.getItem('commonCount') || 0} / ${getTotalRarityCount('común')}`;
    rareCounterDiv.innerText = `Raras Desbloqueadas: ${localStorage.getItem('rareCount') || 0} / ${getTotalRarityCount('rara')}`;
    epicCounterDiv.innerText = `Épicas Desbloqueadas: ${localStorage.getItem('epicCount') || 0} / ${getTotalRarityCount('épica')}`;
    legendaryCounterDiv.innerText = `Legendarias Desbloqueadas: ${localStorage.getItem('legendaryCount') || 0} / ${getTotalRarityCount('legendaria')}`;
    });

    const savedUnlockedCards = JSON.parse(localStorage.getItem('unlockedCards')) || [];
    savedUnlockedCards.forEach(card => unlockedCards.add(card));
    updateCardCounter();
    createCards();

    resetButtonDiv.addEventListener('click', resetProgress);
});

function createCards() {
    gameBoard.innerHTML = '';
    cardImages.forEach((image, index) => {
        const card = document.createElement('div');
        card.className = unlockedCards.has(image.name) ? 'card' : 'card locked';
        card.dataset.name = image.name;
        card.dataset.rarity = image.rarity;

        if (unlockedCards.has(image.name)) {
            card.innerHTML = `<img src="imagenes/${image.name}" alt="Carta" class="card-img">`;
        } else {
            card.innerHTML = `<span>Carta ${index + 1}</span>`;
        }
        
        gameBoard.appendChild(card);
        addCardClickEvent(card);
    });
}

function getProbabilitiesMessage(type) {
    const probabilities = {
        'básico': [
            { rarity: 'Común', chance: 0.75 },
            { rarity: 'Rara', chance: 0.25 }
        ],
        'casual': [
            { rarity: 'Común', chance: 0.2 },
            { rarity: 'Rara', chance: 0.7 },
            { rarity: 'Épica', chance: 0.1 }
        ],
        'plus': [
            { rarity: 'Rara', chance: 0.29 },
            { rarity: 'Épica', chance: 0.7 },
            { rarity: 'Legendaria', chance: 0.01 }
        ],
        'premium': [
            { rarity: 'Rara', chance: 0.05 },
            { rarity: 'Épica', chance: 0.6 },
            { rarity: 'Legendaria', chance: 0.35 }
        ]
    };

    let message = '';
    probabilities[type].forEach(prob => {
        message += `${prob.rarity}: ${Math.round(prob.chance * 100)}%\n`;
    });

    return message;
}


function confirmOpenPack(type, cost) {
    if (totalCoins < cost) {
        alert('No tienes suficientes monedas para abrir este cofre.');
        return;
    }

    // Definir las probabilidades según el tipo de cofre
    const probabilitiesMessage = getProbabilitiesMessage(type);

    const confirmation = confirm(`¿Estás seguro de que quieres gastar ${cost} monedas para abrir un cofre ${type}?\n\nProbabilidades:\n${probabilitiesMessage}`);
    if (confirmation) {
        openPack(type);
    }
}

function openPack(type) {
     // Reproduce el sonido al abrir el paquete
     const openPackSound = document.getElementById('open-pack-sound');
     openPackSound.play().catch(error => {
         console.error("Error al reproducir el sonido:", error);
     });
    
    totalCoins -= (type === 'básico') ? 10 : type === 'casual' ? 15 : type === 'plus' ? 20 : 25;
    localStorage.setItem('totalCoins', totalCoins);
    coinsDiv.innerText = `🪙 ${totalCoins}`;

    let pack = [];
    const counts = { común: 0, rara: 0, épica: 0, legendaria: 0 };
    const totalCards = 5;

    let epicCardAdded = false;
    let legendaryCardAdded = false;

    while (pack.length < totalCards) {
        let card = selectCard(type, counts);

        if (pack.filter(c => c.name === card.name).length >= 2) {
            continue;
        }

        if (type === 'plus' && !epicCardAdded && counts['épica'] < 1) {
            card = getEpicCard();
            epicCardAdded = true;
        } else if (type === 'premium' && !legendaryCardAdded && counts['legendaria'] < 1) {
            card = getLegendaryCard();
            legendaryCardAdded = true;
        }

        pack.push(card);
        counts[card.rarity] = (counts[card.rarity] || 0) + 1;
    }

    recentCardsDiv.innerHTML = '';

    let coinsFromRepeatedCards = 0;

    pack.forEach(card => {
        const cardElement = document.querySelector(`.card[data-name="${card.name}"]`);
        const coinValue = getCoinValue(card.rarity);
        
        const recentCardDiv = document.createElement('div');
        recentCardDiv.className = 'card recent-card';
        recentCardDiv.innerHTML = `<img src="imagenes/${card.name}" alt="Carta" class="card-img">`;

        if (unlockedCards.has(card.name)) {
            coinsFromRepeatedCards += coinValue;
            showCoinReward(recentCardDiv, coinValue);
        } else {
            unlockedCards.add(card.name);
            cardElement.classList.remove('locked');
            cardElement.innerHTML = `<img src="imagenes/${card.name}" alt="Carta" class="card-img">`;
            updateCardCounter();
            updateRarityCounter(card.rarity);
        }

        setTimeout(() => {
            recentCardDiv.style.opacity = 1;
            recentCardDiv.style.transform = 'translateY(0)';
        }, 50);

        recentCardsDiv.appendChild(recentCardDiv);
        addCardClickEvent(recentCardDiv);
    });

    totalCoins += coinsFromRepeatedCards;
    coinsDiv.innerText = `🪙 ${totalCoins}`;

    localStorage.setItem('totalCoins', totalCoins);
    localStorage.setItem('unlockedCards', JSON.stringify(Array.from(unlockedCards)));
}

function addCardClickEvent(cardDiv) {
    cardDiv.addEventListener('click', () => openFullScreen(cardDiv.querySelector('img').src));
}

function openFullScreen(imgSrc) {
    const fullScreenImg = document.createElement('img');
    fullScreenImg.src = imgSrc;
    fullScreenImg.className = 'full-screen-img';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.appendChild(fullScreenImg);
    
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    document.body.appendChild(overlay);
}

function getCoinValue(rarity) {
    switch (rarity) {
        case 'común':
            return 1;
        case 'rara':
            return 2;
        case 'épica':
            return 3;
        case 'legendaria':
            return 5;
        default:
            return 0;
    }
}

function selectCard(type, counts) {
    const probabilities = {
        'básico': [{ rarity: 'común', chance: 0.75 }, { rarity: 'rara', chance: 0.25 }],
        'casual': [{ rarity: 'común', chance: 0.2 }, { rarity: 'rara', chance: 0.7 }, { rarity: 'épica', chance: 0.1 }],
        'plus': [{ rarity: 'rara', chance: 0.29 }, { rarity: 'épica', chance: 0.7 }, { rarity: 'legendaria', chance: 0.01 }],
        'premium': [{ rarity: 'rara', chance: 0.05 }, { rarity: 'épica', chance: 0.6 }, { rarity: 'legendaria', chance: 0.35 }]
    }[type];

    const random = Math.random();
    let cumulativeChance = 0;
    let selectedRarity = 'común';

    for (const { rarity, chance } of probabilities) {
        cumulativeChance += chance;
        if (random <= cumulativeChance) {
            selectedRarity = rarity;
            break;
        }
    }

    const availableCards = cardImages.filter(card => card.rarity === selectedRarity);
    return availableCards[Math.floor(Math.random() * availableCards.length)];
}

function getEpicCard() {
    const epicCards = cardImages.filter(card => card.rarity === 'épica');
    return epicCards[Math.floor(Math.random() * epicCards.length)];
}

function getLegendaryCard() {
    const legendaryCards = cardImages.filter(card => card.rarity === 'legendaria');
    return legendaryCards[Math.floor(Math.random() * legendaryCards.length)];
}

function redeemCode() {
    const input = document.getElementById('code-input').value.trim().toUpperCase();
    let coinsToAdd = 0;
    let message = '';

    const redeemedCodes = JSON.parse(localStorage.getItem('redeemedCodes')) || [];

    if (codes10.has(input) && !redeemedCodes.includes(input)) {
        coinsToAdd = 10;
        codes10.delete(input);
        redeemedCodes.push(input);
        message = '¡Has ganado 10 monedas!';
    } else if (codes15.has(input) && !redeemedCodes.includes(input)) {
        coinsToAdd = 15;
        codes15.delete(input);
        redeemedCodes.push(input);
        message = '¡Has ganado 15 monedas!';
    } else {
        alert('Código inválido o ya canjeado.');
        return;
    }

    const coinSound = document.getElementById('coin-sound');
    coinSound.play().catch(error => {
        console.error("Error al reproducir el sonido:", error);
    });

    totalCoins += coinsToAdd;

    localStorage.setItem('totalCoins', totalCoins);
    localStorage.setItem('redeemedCodes', JSON.stringify(redeemedCodes));
    
    coinsDiv.innerText = `🪙 ${totalCoins}`;
    alert(message);
}

function updateCardCounter() {
    cardCounterDiv.innerText = `Cartas desbloqueadas: ${unlockedCards.size} / ${cardImages.length}`;
}

function updateRarityCounter(rarity) {
    switch (rarity) {
        case 'común':
            const commonCount = getRarityCount('común');
            commonCounterDiv.innerText = `Comunes Desbloqueadas: ${commonCount} / ${getTotalRarityCount('común')}`;
            localStorage.setItem('commonCount', commonCount);
            break;
        case 'rara':
            const rareCount = getRarityCount('rara');
            rareCounterDiv.innerText = `Raras Desbloqueadas: ${rareCount} / ${getTotalRarityCount('rara')}`;
            localStorage.setItem('rareCount', rareCount);
            break;
        case 'épica':
            const epicCount = getRarityCount('épica');
            epicCounterDiv.innerText = `Épicas Desbloqueadas: ${epicCount} / ${getTotalRarityCount('épica')}`;
            localStorage.setItem('epicCount', epicCount);
            break;
        case 'legendaria':
            const legendaryCount = getRarityCount('legendaria');
            legendaryCounterDiv.innerText = `Legendarias Desbloqueadas: ${legendaryCount} / ${getTotalRarityCount('legendaria')}`;
            localStorage.setItem('legendaryCount', legendaryCount);
            break;
    }
}

function getRarityCount(rarity) {
    return Array.from(unlockedCards).filter(cardName => cardImages.find(card => card.name === cardName).rarity === rarity).length;
}

function getTotalRarityCount(rarity) {
    return cardImages.filter(card => card.rarity === rarity).length;
}

function resetProgress() {
    totalCoins = 0;
    unlockedCards.clear();
    localStorage.removeItem('totalCoins');
    localStorage.removeItem('redeemedCodes');
    localStorage.removeItem('unlockedCards');
    
    resetCodes(); // Reiniciar códigos a su estado original
    coinsDiv.innerText = `🪙 ${totalCoins}`;
    recentCardsDiv.innerHTML = '';
    createCards(); // Recrea las cartas
    updateCardCounter(); // Actualiza el contador de cartas

    // Reinicia contadores de rarezas
    commonCounterDiv.innerText = 'Comunes Desbloqueadas: 0 / 48';
    rareCounterDiv.innerText = 'Raras Desbloqueadas: 0 / 24';
    epicCounterDiv.innerText = 'Épicas Desbloqueadas: 0 / 18';
    legendaryCounterDiv.innerText = 'Legendarias Desbloqueadas: 0 / 10';
}

function resetCodes() {
    codes10.clear();
    codes15.clear();
    
    const originalCodes10 = [
    "VBNM89O", "BNMK12P", "QWES34X", "ASDF98C", "ERTY56M", 
    "YUIO12S", "LKJH99V", "HGFDS45F", "EDCBA32A", "QAZWSX9"
    ];
    
    const originalCodes15 = [
        "ABCDE12", "FGHIJ34", "KLMNO56", "PQRST78", "UVWXY90", 
        "ZABCD11", "EFGHI22", "JKLMN33", "OPQRS44", "TUVWX55"
    ];

    originalCodes10.forEach(code => codes10.add(code));
    originalCodes15.forEach(code => codes15.add(code));
}

function showCoinReward(cardElement, coins) {
    const coinReward = document.createElement('div');
    coinReward.className = 'coin-reward';
    coinReward.innerText = `🪙 +${coins}`;
    cardElement.appendChild(coinReward);

    setTimeout(() => {
        coinReward.style.opacity = 1;
        setTimeout(() => {
            coinReward.style.opacity = 0;
            setTimeout(() => {
                cardElement.removeChild(coinReward);
            }, 500);
        }, 2000);
    }, 50);
}

// Crea las cartas inicialmente
createCards();

