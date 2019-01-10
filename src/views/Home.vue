<template>
  <div>
    <div id="content">
        <h2>The GBG Game</h2>
        <h3>How well do you really know your Gothenburg?</h3>
        <p>Test your skills here against our experts: <br>
          Glenn, Håkan or Miriam.</p>
        <p id="musicText">And don't forget to first push play icon below for some music to get into the right mood!</p>


        <router-link to="/gamemenu"><button class="startgamebutton"> <span>Go for it </span></button></router-link>
        <br>
        <br>
        <audio id="player" src="http://k007.kiwi6.com/hotlink/3h77ek6oz8/gbgsong.mp3"></audio>
        <div>
            <button class="musicbutton" onclick="document.getElementById('player').play()"><img src="../assets/Play.png" width="60px"></button>
            <button class="musicbutton" onclick="document.getElementById('player').pause()"><img src="../assets/Pause.jpg" width="60px"></button>
        </div>
    </div>
</div>
</template>
