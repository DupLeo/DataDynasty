const barCanvas = document.getElementById('barCanvas');

const barChart = new Chart(barCanvas,{
    type:"bar", // style du graphique (ici bar)
    data:{
        labels:["Paris", "Tokyo","Berlin","Berne"], // Nom des barres
        datasets:[{
            label:["dépense"],
            data:[240,120,140,130], // Valeurs des barres
            backgroundColor:["crimson","black","lightgreen","violet"] // Couleurs des barres
        }]
    },
    options:{
        scales:{
        y:{
            suggestedMax:500, // taille maximal en ordonnée
            ticks:{
                font:{
                    size:20, // taille police en ordonnée
                }
            },
        },
        x:{
            ticks:{
                font:{
                    size:22, // taille police en abcisse
                }
            },
        }
    }
    }
});

