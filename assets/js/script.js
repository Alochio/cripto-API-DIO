var apikey = {
  key: "9bab961c-b3c6-4444-a02d-72bdb2c1cf72",
};

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apikey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })
  .then((api) => {
    console.log(api);
    var texto = "";
    for (let i = 0; i < 100; i++) {

    const dataString = api.data[i].first_historical_data;
    const data = new Date(dataString);
    const firstHistoricalDataFormated = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    
      texto =
        texto +
        `
            <div class="media">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${api.data[i].id}.png" class="align-self-center mr-3 imagem" alt="coin">
                <div class="media-body">
                <h5 class="mt-2 name">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p>Data Histórica Inicial: <span id="data-formatada-${i}">${firstHistoricalDataFormated}</span></p>
                </div>
            </div>
            `;

      document.getElementById("coins").innerHTML = texto;
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
