class Wrestler {

	constructor(name, health, accuracy, power){
		this.name = name
		this.health = health
		this.accuracy = accuracy
		this.power = power
  }
  
	fight (attacked){
			event.stopPropagation()
			let fightResult = Math.floor(Math.random() * this.accuracy)
			
				if (fightResult >= 3){
					attacked.health -= this.power			
					let healthRemaining = attacked.health/100 * 210
					$('.hpBarRamses').css("width", healthRemaining)
					nachoAudio.play()
					$('#logParagraph').text(this.name + " has attacked " + attacked.name + ". Now " + attacked.name  + " has a health of " + attacked.health + ".")
				}
				if (fightResult <= 2){
					$('#logParagraph').text(attacked.name + " has dissapeared from the attack of " + this.name + "!")
					ramsesAudio.play()
				}
  }
  
	attack (attacked){
			event.stopPropagation()
			let fightResult = Math.floor(Math.random() * this.accuracy)	
				if (fightResult >= 3){
					attacked.health -= this.power
					let healthRemaining = attacked.health/100 * 210 
					$('.hpBarNacho').css("width", healthRemaining)
					takeItEasyAudio.play()
					$('#logParagraph').text(this.name + " has attacked " + attacked.name + ". Now " + attacked.name  + " has a health of " + attacked.health + ".")
				}
				if (fightResult <= 2){
					$('#logParagraph').text(attacked.name + " has dissapeared from the attack of " + this.name + "!")
					escapeAudio.play()
				}
	}

	eatCorn () {
		let eatCornResult = Math.floor(Math.random() * 2)
      if (eatCornResult == 0){
        this.power += 2
        this.accuracy -= 1
        let $powerNumber = $('#powerNumber')
        $powerNumber.text(this.power)
        let $accuracyNumber = $('#accuracyNumber')
        $accuracyNumber.text(this.accuracy)
        cornAudio.play()
        $('#logParagraph').text("You ate corn and increased your power by +2 points to " + this.power + " but you decreased your accuracy by -1 to " + this.accuracy + ".")
      }
      else {
        thatCornAudio.play()
        $('#logParagraph').text("Hi Granny.")
      }		
	}

	eatSalad () {
		let eatSaladResult = Math.floor(Math.random() * 2)
      if (eatSaladResult == 0){
        this.power -= 1
        this.accuracy += 2
        let $powerNumber = $('#powerNumber')
        $powerNumber.text(this.power)
        let $accuracyNumber = $('#accuracyNumber')
        $accuracyNumber.text(this.accuracy)
        $('#logParagraph').text("You ate a salad and increased your accuracy by +2 points to " + this.accuracy + " but you decreased your power by -1 to " + this.power + ".")
      }	
      else {
        $('#logParagraph').text("I'm sorry you were unable to have just like a salad.")
      }
		}

	eatLordsChips () {
		let eatChipsResult = Math.floor(Math.random() * 5)
      if (eatChipsResult >= 1){
        this.power -= 2
        this.accuracy -=2
        this.health /= 2
        let $powerNumber = $('#powerNumber')
        $powerNumber.text(this.power)
        let $accuracyNumber = $('#accuracyNumber')
        $accuracyNumber.text(this.accuracy)
        let healthRemaining = this.health/100 * 210 
        $('.hpBarNacho').css("width", healthRemaining)
        $('#logParagraph').text("You ate leftovers. This is the worst lunch you've ever had. Your accuracy decreased by -2 to " + this.accuracy + " and your power decreased by -2 to " + this.power + ". Your health has now been cut in 1/2 and is now at " + this.health + ".")
      }

      if (eatChipsResult == 0){
        this.health = 100
        let $powerNumber = $('#powerNumber')
        $powerNumber.text(this.power)
        let $accuracyNumber = $('#accuracyNumber')
        $accuracyNumber.text(this.accuracy)
        let healthRemaining = this.health/100 * 210 
        $('.hpBarNacho').css("width", healthRemaining)
        $('#logParagraph').text("You ate the Lord's chips and miraculously gained full health!")	
      }
		}

		borrowSweats () {	
		let borrowSweatsResult = Math.floor(Math.random() * 5)			
      if (borrowSweatsResult == 2){
        this.power += 3
        this.accuracy += 3
        let $powerNumber = $('#powerNumber')
        $powerNumber.text(this.power)
        let $accuracyNumber = $('#accuracyNumber')
        $accuracyNumber.text(this.accuracy)
        $('#logParagraph').text("Fantastic! You borrowed Chancho's sweatpants increased your power by +3 to " + this.power + " and increased your accuracy by +3 to " + this.accuracy + ".")
      }
              else {
        $('#logParagraph').text("Your attempt to borrow Chancho's sweatpants was unsuccessful.")
      }	
		}		
}

const nacho = new Wrestler("Nacho", 100, 6, 6)
const ramses = new Wrestler("Ramses", 100, 10, 10)
// sounds
let chipsAudio = new Audio("Sounds/ChipsA.mp3") 
let nachoAudio = new Audio("Sounds/NachoA.mp3")
let greatestFighterAudio = new Audio("Sounds/FighterA.mp3")
let saladAudio = new Audio("Sounds/LikeASaladA.mp3")
let cornAudio = new Audio("Sounds/CornA.mp3")
let thatCornAudio = new Audio("Sounds/CornFace.mp3")
let takeItEasyAudio = new Audio("Sounds/TakeItEasyA.m4a")
let sucksToBeMeAudio = new Audio("Sounds/SucksToBeMeA.mp3")
let borrowSweatsAudio = new Audio("Sounds/SweatsA.mp3")
let ramsesAudio = new Audio("Sounds/RamsesA.mp3")
let escapeAudio = new Audio("Sounds/EscapeA.mp3")

const startTheGame = () => {
	greatestFighterAudio.play()
	const $hideButton = $('#start-game')
	$($hideButton).hide()
	$('body').removeClass('hide')
	$('#ready').remove()
	$('#fight-ramses').removeClass('hide')
	$('#avoid').removeClass('hide')
	$('#eatCorn').removeClass('hide')
	$('#borrowSweats').removeClass('hide')
	$('#eatChips').removeClass('hide')
	$('#eatSalad').removeClass('hide')
	$('.info').removeClass('hide')
	$('#battleLogH1').hide()
	$('#fight-ramses').show()
	$('#avoid').hide()
	$('#eatCorn').show()
	$('#borrowSweats').show()
	$('#eatChips').show()	
	$('#eatSalad').show()	
	$('#fight-ramses').on('click', fight);
	$('#avoid').on('click', avoid);
	$('#eatCorn').on('click', eatCorn);
	$('#eatSalad').on('click', eatSalad)
	$('#borrowSweats').on('click', borrowSweats)
	$('#eatChips').on('click', eatLordsChips)
};

const fight = () => {
  nacho.fight(ramses)
	$('#fight-ramses').hide()
	$('#eatCorn').hide()
	$('#eatSalad').hide()
	$('#borrowSweats').hide()
	$('#eatChips').hide()
	$('#avoid').show()
	$('#battleLogH1').show()

  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost! Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
};

const avoid = () => {
	ramses.attack(nacho)
	$('#fight-ramses').show()
	$('#avoid').hide()	
	$('#eatCorn').show()
	$('#borrowSweats').show()
	$('#eatChips').show()
	$('#eatSalad').show()
	$('#battleLogH1').show()

  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
		
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost! Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
};

const eatCorn = () => {
	nacho.eatCorn()	
	$('#fight-ramses').hide()
	$('#eatCorn').hide()
	$('#borrowSweats').hide()
	$('#eatChips').hide()
	$('#eatSalad').hide()
	$('#avoid').show()	
	$('#battleLogH1').show()
	
  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost! Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
}

const eatSalad = () => {
	nacho.eatSalad()	
	saladAudio.play()
	$('#fight-ramses').hide()
	$('#eatCorn').hide()
	$('#borrowSweats').hide()
	$('#eatChips').hide()
	$('#eatSalad').hide()
	$('#avoid').show()	
	$('#battleLogH1').show()
	
  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
		
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost! Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
}

const eatLordsChips = () => {
	nacho.eatLordsChips()
	chipsAudio.play()

	$('#fight-ramses').hide()
	$('#eatCorn').hide()
	$('#borrowSweats').hide()
	$('#eatChips').hide()
	$('#eatSalad').hide()
	$('#avoid').show()	
	$('#battleLogH1').show()
	
  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
		
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost! Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
}

const borrowSweats = () => {
	nacho.borrowSweats()
	borrowSweatsAudio.play()
	$('#fight-ramses').hide()
	$('#eatCorn').hide()
	$('#borrowSweats').hide()
	$('#eatChips').hide()
	$('#eatSalad').hide()
	$('#avoid').show()	
	
  if (ramses.health <= 0){
    nachoAudio.play()
    if(confirm("You defeated Ramses! You are the best! Play again?")){
      window.location.reload()
    }
    $('body').hide()
  }
  if (nacho.health <= 0){
    sucksToBeMeAudio.play()
    if(confirm("Oh no you lost!Play again?")){
      window.location.reload()
    }
    $('body').hide()			
  }
}

$(() => {
	$('#start-game').on('click', startTheGame);
})
// some games structure ideas came from:
//https://www.youtube.com/watch?v=sr8bJKSUYwE&t=1446s 