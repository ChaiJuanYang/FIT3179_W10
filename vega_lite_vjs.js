var vg1 = "w10_birth.json";
vegaEmbed("#map_plot", vg1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg2 = "w10_death.json";
vegaEmbed("#map_plot_2", vg2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);