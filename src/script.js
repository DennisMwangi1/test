document.addEventListener('DOMContentLoaded',()=>{
    fetch('https://dennismwangi1.github.io/deploy-api/db.json')
    .then((res)=>res.json())
    .then((players)=> renderPlayers(players.players))
    
    // .catch(alert('cannot render players'))

   function renderPlayers(player) {
    const heading1 = document.getElementById('heading1')
    let playerName = document.createElement('h2')
    let playerImage = document.createElement("img")
    playerImage.src = player[2].image
    playerImage.style.height = "500px"
    playerName.textContent = player[2].firstName
    console.log(player[2].firstName)
    heading1.appendChild(playerImage)
    heading1.appendChild(playerName)
   }




})