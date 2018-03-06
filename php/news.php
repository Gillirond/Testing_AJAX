<?php
$query = $_GET['query'];

if ('England' == $query) {
echo json_encode([array("newstitle"=>"Wenger charged over conduct",
 "date"=>"02.01.2018",
  "text"=>"Arsene Wenger has been charged by the FA over his conduct towards match officials in Arsenal's draw at West Brom.<br><br>An FA disciplinary statement said: &quot;It is alleged his [Wenger] language and/or behaviour in the match officials&#39; changing room after the game was abusive and/or improper and/or questioned the integrity of the match referee.&quot;"),
  array("newstitle"=>"Jesse Lingard is making a jump",
  "date"=>"01.01.2018",
  "text"=>"Jesse Lingard was on target yet again as Manchester United won 2-0 at Everton. His continued improvement under Jose Mourinho is proving a big boost at just the right time, writes Adam Bate.<br>&quot;These boys, they jump or they don't jump,&quot; said Jose Mourinho. &quot;One thing is to be a young talent, another is to be a very good player. Some players are not capable of that jump. From great potential young players, they go to normal players. I think Jesse is giving that jump. He is being more consistent. He is being more adaptable. He understands better the game, the different spaces, the different positions. He is going in a good direction.&quot;")]);
}

if ('Ukraine' == $query) {
echo json_encode([array("newstitle"=>"Marlos - Shakhtar's player of the year 2017",
"date"=>"30.12.2017",
"text"=>"Voting for the best football player of the team was held on the official website of Shakhtar.<br>The main contenders for the victory were goalkeeper Andriy Pyatov and midfielder Marlos, each of whom was three times recognized as the best player of the month in 2017.<br>As a result, with a very small advantage, the title of the player of the year was won by Marlos, who scored 12 468 votes against Pyatov's 11,872.<br>The third place in the poll was taken by Tyson, who was supported by 10,144 people.")]);
}

if ($query == 'Spain') {
echo json_encode([array("newstitle"=>"Atletico officially unveil Costa",
"date"=>"31.12.2017",
"text"=>"Diego Costa has finally been unveiled as an Atletico Madrid player, three months after agreeing to leave Chelsea in a £57m deal.")]);
}

if ($query == 'Champions league') {
echo json_encode([array("newstitle"=>"Gerard Pique hoping for Barcelona v Manchester City Champions League final",
"date"=>"15.12.2017",
"text"=>"Barcelona defender Gerard Pique says he is hoping to meet former manager Pep Guardiola's Manchester City in the Champions League final.<br>Pique says he has been impressed by Manchester City who made Premier League history with their 15th successive win - the longest ever run in the division - as they beat Swansea 4-0 on Wednesday.")]);
}

?>