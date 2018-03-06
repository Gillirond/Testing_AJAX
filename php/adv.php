<?php
$adv_n=$_GET['adv_n'];
$adv_crnt=$_GET['adv_crnt'];

if($adv_n>0) {
   switch($adv_crnt) {
       case 0:
          echo "<h3>Vodafone</h3><img src=img/adv/vodafone.png>";
          break;
       case 1:
          echo "<h3>Pari<br>Match</h3><img src=img/adv/parimatch.jpg>";
          break;
       case 2:
          echo "<h3>Unicef</h3><img src=img/adv/unicef.jpg><h4>United Nation Children's Fund</h4>";
          break;
       case 3:
          echo "<h3>McDonald's</h3><img src=img/adv/mcdonalds.jpg>";
          break;
       default:
          echo "";
          break;
   }
}
?>