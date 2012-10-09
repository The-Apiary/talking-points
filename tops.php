<?php

try {

  $m = new Mongo();
  $db = $m->selectDB("debates");
  $collection = new MongoCollection($db, "scores");

  $cursor = $collection->find();
  $cursor->sort(array('score' => -1))->limit(16);

  $arr = array();

  foreach($cursor as $obj) {
    $arr[] =  array("name"=>$obj['name'],"score"=>(int)$obj['score']);
  }
  
  echo json_encode($arr);
  
  } catch(MongoException $e) {
    echo json_encode(array("error"=>"MongoException","message"=>$e));
    die($e);
  }

?>
