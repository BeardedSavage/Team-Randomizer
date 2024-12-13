//Old array: "Jimmy", "Hayley", "Jackie", "Mom", "Micheal", "Angela", "Victoria", "Brandon"
function whoServes() {
    team = submitMember();

    var randomPick = Math.floor(Math.random() * team.length) + 1;
 
    for (i = 0; i < 4; i++) {
    document.getElementsByClassName("members")[0].textContent = `${team[randomPick-1]}`;
    document.getElementsByClassName("members")[1].textContent = `${team[randomPick+1]}`;
    document.getElementsByClassName("members")[2].textContent = `${team[randomPick]}`;
    document.getElementsByClassName("members")[3].textContent = `${team[randomPick-2]}`;
    }
}

function submitMember() {
    var teamMembers = []

    for (var i = 1; i <= 10; i++) {
        var getTeam = document.getElementById(`input${i}`).value;
        teamMembers.push(getTeam);
        if (teamMembers[i] === "") {
            teamMembers.pop();
        }
        console.log(teamMembers);
    }



    return teamMembers;
}
