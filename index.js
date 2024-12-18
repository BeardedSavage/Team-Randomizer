//Old array: "Jimmy", "Hayley", "Jackie", "Mom", "Micheal", "Angela", "Victoria", "Brandon"
function whoServes() {
    team = [];

    var teamArray = document.querySelectorAll(".member-input").length;

    for (i = 0; i < teamArray; i++) {
        var newTeam = document.querySelectorAll(".member-input")[i].textContent;
        team.push(newTeam);
    }

    var randomPick = Math.floor(Math.random() * team.length) + 1;
 
    for (i = 0; i < 4; i++) {
    document.getElementsByClassName("members")[0].textContent = `${team[randomPick-1]}`;
    document.getElementsByClassName("members")[1].textContent = `${team[randomPick+1]}`;
    document.getElementsByClassName("members")[2].textContent = `${team[randomPick]}`;
    document.getElementsByClassName("members")[3].textContent = `${team[randomPick-2]}`;
    }

    console.log(team);
}

function submitMember (name) {

        var getTeam = document.getElementById("input").value;

        newTeam = document.querySelector(".library-input").innerHTML += `<li class="member-input"> ${getTeam} </li>`;

}