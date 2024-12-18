document.querySelector(".random").addEventListener("click", function(e) {
    team = []

    var teamArray = document.querySelectorAll(".member-input").length;

    for(i = 0; i < teamArray; i++) {
        var newTeam = document.querySelectorAll(".member-input")[i].textContent;
        team.push(newTeam);
    }

    var randnomPick = Math.floor(Math.random() * team.length) + 1 ;
    var randnomPick2 = Math.floor(Math.random() * team.length) + 1 ;
    var randnomPick3 = Math.floor(Math.random() * team.length) + 1 ;
    var randnomPick4 = Math.floor(Math.random() * team.length) + 1 ;

    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("members")[0].textContent = `${team[randnomPick]}`;
        document.getElementsByClassName("members")[1].textContent = `${team[randnomPick2]}`;
        document.getElementsByClassName("members")[2].textContent = `${team[randnomPick3]}`;
        document.getElementsByClassName("members")[3].textContent = `${team[randnomPick4]}`;
    }

    console.log(team);

})

document.querySelector(".submit").addEventListener("click", function(e){

    submitMember(e.submit);

})

document.querySelector("#input").addEventListener("keydown", function(e){

    if (e.key === "Enter") {
        submitMember(e.submit)
    }

})

function submitMember(submit) {
    
    var getTeam = document.getElementById("input").value;

    var submitTeam = document.querySelector(".library-input").innerHTML += `<li class="member-input"> ${getTeam} </li>`;

    submitTeam;

}