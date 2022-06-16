<!DOCTYPE html>
 <html>
 <head>    
 	<link rel="stylesheet" href="css/style.css">
    <!-- jQuery -->
   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/app.js">
    </script>
 	<title></title>
 </head>
 

 <body>

	<div id="container">
		<div id="topFlex">
			<div id="nachoStats" class="info hide">
				<span class="healthBar">HEALTH</span><br>
          <div class="hpBorder">
            <div id="nachoHP" class="hpBarNacho"></div>
          </div><br>
				<span class="healthBar">POWER</span>
          <div id="powerNumber"class="hpBorder">6
            <div id="nachoPower"></div>
          </div><br>
				<span class="healthBar">ACCURACY</span>
				<div id="accuracyNumber" class="hpBorder">6
					<div id="nachoAccuracy"></div><br>
        </div><br>
				<div class="fightEat hide">		
					<button class="hide buttonToggle" id="avoid">AVOID ATTACK</button><br>
					<button class="hide buttonToggle" id="fight-ramses">FIGHT</button><br>
					<button class="hide buttonToggle btnStyle" id="eatSalad">EAT SALAD<br>(50% success rate:<br>Power -1, Accuracy +2)</button><br>
					<button class="hide buttonToggle btnStyle" id="eatCorn">EAT CORN<br>(50% success rate:<br>Power +2, Accuracy -1)</button><br>
					<button class="hide buttonToggle btnStyle" id="borrowSweats">BORROW SOME SWEATS<br>(25% success rate:<br>Power +3, Accuracy +3)</button><br>
					<button class="hide buttonToggle btnStyle" id="eatChips">EAT LORD'S CHIPS<br>(25% success rate:<br> gain full health)<br><br>(75% success rate <br> of getting leftovers:<br>lose half your health<br>and decrease power accuracy by -2)</button><br>
 				</div>
			</div> 
			
      <div id="Nacho" class="wrestler"> 
        <img class="photoProfile" src="images/NACHO.png">Nacho 	
      </div>
      <div id="vs">vs</div>				
      <div id="Ramses" class="wrestler"> 
        <img class="photoProfile" src="images/ramses.png">Ramses
      </div>			
			<div id="ramsesStats" class="info hide">
				<span class="healthBar">HEALTH</span><br>
				<div class="hpBorder">
					<div id="ramsesHp" class="hpBarRamses"></div>
				</div><br>
				<span class="healthBar">POWER</span>
				<div class="hpBorder">10
					<div id="ramsesPower"></div>
				</div><br>
				<span class="healthBar">ACCURACY</span>
				<div class="hpBorder">10
					<div id="ramsesAccuracy"></div><br>
				</div>	
			</div>
		</div>
		<div id="middlewFlex">
		</div>	
		<div id="bottomMiddleRow">
		</div>
		<div>
			<h1 id="ready"class="header">ARE YOU READY TO FIGHT RAMSES?</h1>
		</div>
		<div id="bottomFlex"> 
			<p id="logParagraph"></p>
		</div>
	<div id="front-page">
 			<button  class="buttonToggle" id="start-game">YES</button>
	</div>	
 </div>
</body>
</html>