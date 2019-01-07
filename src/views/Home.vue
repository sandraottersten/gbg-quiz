<template>
  <div>
    <div id="content">  
        <h2>The GBG Game</h2>
        <p>
        How well do you really know your Gothenburg?
        Are you a master of fine dining? Have you strolled around in the Haga district? And how much do you really know about the trams running through the city?
        Test your skills here against our players:  Easy-Glenn, Mediocre-Håkan or Hardcore-Mirijam.
        And don't forget to first push the black play icon below for some music to get into the right mood!
        Good luck!
        </p>
        <router-link to="/gamemenu"><button class="startgamebutton"> <span>Go for it </span></button></router-link>
        <br>
        <br>     
        <audio id="player" src="http://k007.kiwi6.com/hotlink/3h77ek6oz8/gbgsong.mp3"></audio>
        <div>
            <button class="musicbutton" onclick="document.getElementById('player').play()"><img src="http://i63.tinypic.com/262uou9.png" width="60px"></button>
            <button class="musicbutton" onclick="document.getElementById('player').pause()"><img src="http://i68.tinypic.com/mj90k2.jpg" width="60px"></button>
        </div>
    </div>    
</div>
</template>