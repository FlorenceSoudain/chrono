var secondes = document.getElementById('secondes');
var minutes = document.getElementById('minutes');
var heures = document.getElementById('heures');
var time;
document.getElementById('stop').style.display = "none";
var NbrSecondes = 60;
var NbrMinutes = 60;
var NbrHeures = 24;
function FSecondes()
{
    time = setTimeout(FSecondes, 1000);
    NbrSecondes += -1;
    secondes.innerHTML = NbrSecondes + " secondes ";
    minutes.innerHTML = NbrMinutes + " minutes";
    heures.innerHTML = NbrHeures + " heures";
    if(NbrSecondes == 0)
    {
        NbrSecondes = 60;
        NbrMinutes += -1;
    }
    if (NbrMinutes == 0)
    {
        NbrMinutes = 60;
        NbrHeures += -1;

    }

}

function stop() {
    clearTimeout(time);
}



document.getElementById('start').addEventListener('click', function () {
    FSecondes();
    document.getElementById('start').style.display ="none";
    document.getElementById('stop').style.display = "block";
});

document.getElementById('stop').addEventListener('click', function () {
    stop();
    document.getElementById('start').style.display ="block";
    document.getElementById('stop').style.display = "none";
});