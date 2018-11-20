var secondes = document.getElementById('secondes');
var minutes = document.getElementById('minutes');
var heures = document.getElementById('heures');
var time;
document.getElementById('stop').style.display = "none";
var NbrSecondes = 60;
var NbrMinutes = 59;
var NbrHeures = 23;
function chrono()
{
    time = setTimeout(chrono, 1000);

    if(NbrSecondes < 1)
    {
        NbrSecondes = 60;
        NbrMinutes--;
    }
    if (NbrMinutes < 0)
    {
        NbrMinutes = 60;
        NbrHeures--;
    }


    NbrSecondes--;
    secondes.innerHTML = NbrSecondes + " secondes ";
    minutes.innerHTML = NbrMinutes + " minutes";
    heures.innerHTML = NbrHeures + " heures";

    if (NbrHeures == 0 && NbrMinutes == 0 && NbrSecondes == 0)
    {
        clearTimeout(time);
        document.getElementById('stop').style.visibility = "hidden";
    }
}

function stop() {
    clearTimeout(time);
}

document.getElementById('start').addEventListener('click', function () {
    chrono();
    document.getElementById('start').style.display ="none";
    document.getElementById('stop').style.display = "block";
});

document.getElementById('stop').addEventListener('click', function () {
    stop();
    document.getElementById('start').style.display ="block";
    document.getElementById('stop').style.display = "none";
});

document.getElementById('envoyer').addEventListener('click', function () {

    var valeurSecondes = document.getElementById('champSecondes').value;
    var valeurMinutes = document.getElementById('champMinutes').value;
    var valeurHeures = document.getElementById('champHeures').value;

    if  (valeurSecondes)
    {
        NbrSecondes = valeurSecondes;
    }
    else
    {
        NbrSecondes = 0;
    }
    if (valeurMinutes)
    {
        NbrMinutes = valeurMinutes;
    }
    else
    {
        NbrMinutes = 0;
    }
    if (valeurHeures)
    {
        NbrHeures = valeurHeures;
    }
    else
    {
        NbrHeures = 0;
    }

    document.getElementById('start').style.display ="none";
    document.getElementById('stop').style.display = "block";
    document.getElementById('envoyer').style.display ="none";

    chrono();
});

document.getElementById('retour').addEventListener('click', function () {
    window.location.reload();
});