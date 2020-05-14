const imagePath = "./assets/xx.png"
const image_bank = [ { imagePath: 'assets/1952_yankees.png', title: 'the 1952 yankees' },
{ imagePath: 'assets/a_novella_about_a_blizzard.png',
  title: 'a novella about a blizzard' },
{ imagePath: 'assets/a_secret_child.png', title: 'a secret child' },
{ imagePath: 'assets/a_sense_of_childlike_wonder.png',
  title: 'a sense of childlike wonder' },
{ imagePath: 'assets/all_of_dorney_park.png',
  title: 'all of dorney park' },
{ imagePath: 'assets/charcuitery_board.png',
  title: 'charcuitery board' },
{ imagePath: 'assets/childhood_home.png', title: 'his childhood home' },
{ imagePath: 'assets/eye.png', title: 'eye' },
{ imagePath: 'assets/frog.png', title: 'frog' },
{ imagePath: 'assets/greg.png', title: 'greg' },
{ imagePath: 'assets/grillin_weenies.png', title: 'hes grillin weenies' },
{ imagePath: 'assets/hand.png', title: 'hand' },
{ imagePath: 'assets/harp.png', title: 'harp' },
{ imagePath: 'assets/harpoon.png', title: 'harpoon' },
{ imagePath: 'assets/humming_bird.png', title: 'humming bird (dont let it out!)' },
{ imagePath: 'assets/justified_season_3.png',
  title: 'justified season 3' },
{ imagePath: 'assets/ken_burns.png', title: 'ken burns' },
{ imagePath: 'assets/lamp.png', title: 'lamp' },
{ imagePath: 'assets/mustache.png', title: 'mustache' },
{ imagePath: 'assets/paul_walker.png', title: 'paul walker' },
{ imagePath: 'assets/script_of_next_cars.png',
  title: 'the script of next cars movie' },
{ imagePath: 'assets/sockem_boppers.png', title: 'sockem boppers' },
{ imagePath: 'assets/sweet_onion.png', title: 'a very sweet onion' },
{ imagePath: 'assets/ten_stinky_tennis_balls.png',
  title: 'ten stinky tennis balls' },
{ imagePath: 'assets/the_dead_parts_of_the_great_barrier_reef.png',
  title: 'the dead parts of the great barrier reef' },
{ imagePath: 'assets/three_dollar_bill.png',
  title: 'a three dollar bill' },
{ imagePath: 'assets/tie_dye_kiit.png', title: 'a tie dye kit' },
{ imagePath: 'assets/tiger.png', title: 'tiger' },
{ imagePath: 'assets/toes.png', title: 'toes' },
{ imagePath: 'assets/tomato.png', title: 'tomato' },
{ imagePath: 'assets/tote_bag.png', title: 'tote bag' },
{ imagePath: 'assets/vitamin.png', title: 'vitamin' },
{ imagePath: 'assets/watermelon.png', title: 'watermelon' },
{ imagePath: 'assets/winter_sports.png', title: 'winter sports' } ]
let imageZone = document.getElementById('hiding-image');
let hidingText = document.getElementById('hiding-text');
imageZone.src = "./base_hat.png";

let Element = document.getElementById('button');
Element.onclick = function () 
{
    let number = Math.floor(Math.random() * Math.floor(image_bank.length));
    console.log(number);
    imageZone.src = image_bank[number].imagePath;
    hidingText.innerHTML = image_bank[number].title;
}