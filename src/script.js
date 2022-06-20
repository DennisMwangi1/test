document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:3000/players')
    .then((res)=>res.json())
    .then((players)=> players.forEach(player => renderPlayers(player))
    )
    // .catch(alert('cannot render players'))

   function renderPlayers(player) {
    const heading1 = document.getElementById('heading1')
    let playerName = document.createElement('h2')
    let playerImage = document.createElement("img")
    playerImage.src = player.image
    playerName.textContent = player.firstName
    heading1.appendChild(playerImage)
    heading1.appendChild(playerName)
   }




})