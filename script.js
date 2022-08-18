const barCanvas = document.getElementById('barCanvas');

const barChart = new Chart(barCanvas,{
    type:"bar",
    data:{
        labels:["Paris", "Tokyo","Berlin","Berne"],
        datasets:[{
            data:[240,120,140,130]
        }]
    }
});

