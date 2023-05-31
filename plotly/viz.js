fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    //J'ai re crée une fonction pour trier par ordre croisant les données car je n'arrivait pas à  utiliser sortByCountryPopulation
    data.sort((a, b) => a.population - b.population);

    
    var countries = data.map(obj => obj.country);
    var populations = data.map(obj => obj.population);
  
    
    var barData = [{
      x: countries,
      y: populations,
      type: 'bar'
    }];
  
    
    var layout = {
      title: 'Data distribution of countries population',
      xaxis: {
        title: 'Country'
      },
      yaxis: {
        title: 'Population'
      }
    };
  
    
    Plotly.newPlot('data-viz', barData, layout);
  }
  

