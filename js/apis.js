// clima
const API_KEY_CLIMA = "bffcd3694572a1780bd6e91b4e7f880f"; 

document.addEventListener("DOMContentLoaded", () => {
    const ciudadInput = document.getElementById("ciudad-input");
    const btnBuscar = document.getElementById("btn-buscar-clima");
    const cardResultado = document.getElementById("clima-resultado");
    const ciudadEl = document.getElementById("clima-ciudad");
    const tempEl = document.getElementById("clima-temperatura");
    const humedadEl = document.getElementById("clima-humedad");
    const descEl = document.getElementById("clima-descripcion");
    const errorEl = document.getElementById("clima-error");

    btnBuscar.addEventListener("click", async () => {
        const ciudad = ciudadInput.value.trim();
        errorEl.textContent = "";
        if (!ciudad) {
            errorEl.textContent = "Por favor ingresá una ciudad.";
            cardResultado.style.display = "block";
            cardResultado.classList.add("show");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${API_KEY_CLIMA}&units=metric&lang=es`;
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error("Ciudad no encontrada o error en la API.");
            }
            const data = await resp.json();

            ciudadEl.textContent = `${data.name}, ${data.sys.country}`;
            tempEl.textContent = `${Math.round(data.main.temp)} °C`;
            humedadEl.textContent = `${data.main.humidity} %`;
            descEl.textContent = data.weather[0].description.toUpperCase();

            cardResultado.style.display = "block";
            cardResultado.classList.add("show");
        } catch (err) {
            errorEl.textContent = err.message;
            ciudadEl.textContent = "";
            tempEl.textContent = "";
            humedadEl.textContent = "";
            descEl.textContent = "";
            cardResultado.style.display = "block";
            cardResultado.classList.add("show");
        }
    });
});
// cripto
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("cripto-select");
    const btn = document.getElementById("btn-buscar-cripto");
    const card = document.getElementById("cripto-resultado");
    const nombreEl = document.getElementById("cripto-nombre");
    const precioEl = document.getElementById("cripto-precio");
    const cambioEl = document.getElementById("cripto-cambio");
    const marketcapEl = document.getElementById("cripto-marketcap");
    const errorEl = document.getElementById("cripto-error");

    const nombresLegibles = {
        bitcoin: "Bitcoin (BTC)",
        ethereum: "Ethereum (ETH)",
        cardano: "Cardano (ADA)",
        litecoin: "Litecoin (LTC)",
        dogecoin: "Dogecoin (DOGE)"
    };

    btn.addEventListener("click", async () => {
        const id = select.value;
        errorEl.textContent = "";

        try {
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("Error al consultar CoinGecko.");

            const data = await resp.json();
            const info = data[id];

            if (!info) throw new Error("No se encontraron datos para esa cripto.");

            nombreEl.textContent = nombresLegibles[id] || id;
            precioEl.textContent = `$ ${info.usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            cambioEl.textContent = `${info.usd_24h_change.toFixed(2)} %`;
            marketcapEl.textContent = `$ ${info.usd_market_cap.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

            // Color verde/rojo según cambio
            cambioEl.style.color = info.usd_24h_change >= 0 ? "#4ade80" : "#f97373";

            card.style.display = "block";
            card.classList.add("show");
        } catch (err) {
            errorEl.textContent = err.message;
            nombreEl.textContent = "";
            precioEl.textContent = "";
            cambioEl.textContent = "";
            marketcapEl.textContent = "";
            card.style.display = "block";
            card.classList.add("show");
        }
    });
});
// paises
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("pais-input");
    const btn = document.getElementById("btn-buscar-pais");
    const card = document.getElementById("pais-resultado");
    const nombreEl = document.getElementById("pais-nombre");
    const capitalEl = document.getElementById("pais-capital");
    const poblacionEl = document.getElementById("pais-poblacion");
    const banderaEl = document.getElementById("pais-bandera");
    const errorEl = document.getElementById("pais-error");

    btn.addEventListener("click", async () => {
        const pais = input.value.trim();
        errorEl.textContent = "";
        if (!pais) {
            errorEl.textContent = "Ingresá el nombre de un país.";
            card.style.display = "block";
            card.classList.add("show");
            return;
        }

        try {
            const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(pais)}?fullText=true`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("País no encontrado.");
            const data = await resp.json();
            const country = data[0];

            nombreEl.textContent = country.name.official;
            capitalEl.textContent = country.capital ? country.capital[0] : "Sin datos";
            poblacionEl.textContent = country.population.toLocaleString("es-ES");
            banderaEl.src = country.flags.svg || country.flags.png;
            banderaEl.style.display = "block";

            card.style.display = "block";
            card.classList.add("show");
        } catch (err) {
            errorEl.textContent = err.message;
            nombreEl.textContent = "";
            capitalEl.textContent = "";
            poblacionEl.textContent = "";
            banderaEl.style.display = "none";
            card.style.display = "block";
            card.classList.add("show");
        }
    });
});
// pokemon
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("pokemon-input");
    const btn = document.getElementById("btn-buscar-pokemon");
    const card = document.getElementById("pokemon-resultado");
    const nombreEl = document.getElementById("pokemon-nombre");
    const tipoEl = document.getElementById("pokemon-tipo");
    const pesoEl = document.getElementById("pokemon-peso");
    const imgEl = document.getElementById("pokemon-imagen");
    const errorEl = document.getElementById("pokemon-error");

    btn.addEventListener("click", async () => {
        const valor = input.value.trim().toLowerCase();
        errorEl.textContent = "";
        if (!valor) {
            errorEl.textContent = "Ingresá un nombre o ID de Pokémon.";
            card.style.display = "block";
            card.classList.add("show");
            return;
        }

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(valor)}`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("Pokémon no encontrado.");

            const data = await resp.json();

            const tipos = data.types.map(t => t.type.name).join(", ");
            const pesoKg = data.weight / 10; // viene en hectogramos

            nombreEl.textContent = data.name.toUpperCase();
            tipoEl.textContent = tipos;
            pesoEl.textContent = `${pesoKg.toFixed(1)} kg`;
            imgEl.src = data.sprites.other["official-artwork"].front_default || data.sprites.front_default;
            imgEl.style.display = "block";

            card.style.display = "block";
            card.classList.add("show");
        } catch (err) {
            errorEl.textContent = err.message;
            nombreEl.textContent = "";
            tipoEl.textContent = "";
            pesoEl.textContent = "";
            imgEl.style.display = "none";
            card.style.display = "block";
            card.classList.add("show");
        }
    });
});
// rick.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("rick-input");
    const btn = document.getElementById("btn-buscar-rick");
    const card = document.getElementById("rick-resultado");
    const imgEl = document.getElementById("rick-imagen");
    const nombreEl = document.getElementById("rick-nombre");
    const estadoEl = document.getElementById("rick-estado");
    const especieEl = document.getElementById("rick-especie");
    const errorEl = document.getElementById("rick-error");

    btn.addEventListener("click", async () => {
        const id = input.value.trim();
        errorEl.textContent = "";
        if (!id) {
            errorEl.textContent = "Ingresá un ID de personaje.";
            card.style.display = "block";
            card.classList.add("show");
            return;
        }

        try {
            const url = `https://rickandmortyapi.com/api/character/${encodeURIComponent(id)}`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("Personaje no encontrado.");
            const data = await resp.json();

            imgEl.src = data.image;
            imgEl.style.display = "block";
            nombreEl.textContent = data.name;
            estadoEl.textContent = data.status;
            especieEl.textContent = data.species;

            card.style.display = "block";
            card.classList.add("show");
        } catch (err) {
            errorEl.textContent = err.message;
            imgEl.style.display = "none";
            nombreEl.textContent = "";
            estadoEl.textContent = "";
            especieEl.textContent = "";
            card.style.display = "block";
            card.classList.add("show");
        }
    });
});
