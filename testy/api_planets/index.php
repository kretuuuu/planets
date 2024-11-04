<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$planets = [];

class Planete
{
    public $id, $name, $position, $diameter, $mass, $distance_from_sun, $orbital_period, $day_len, $atmosphere, $temperature, $moons, $fun_facts, $language;
    function __construct($id, $name, $position, $diameter, $mass, $distance_from_sun, $orbital_period, $day_len, $atmosphere, $temperature, $moons, $fun_facts, $language)
    {
        $this->id = $id;
        $this->name = $name;
        $this->position = $position;
        $this->diameter = $diameter;
        $this->mass = $mass;
        $this->distance_from_sun = $distance_from_sun;
        $this->orbital_period = $orbital_period;
        $this->day_len = $day_len;
        $this->atmosphere = $atmosphere;
        $this->temperature = $temperature;
        $this->moons = $moons;
        $this->fun_facts = $fun_facts;
        $this->language = $language;
    }
}

// polaczenie z baza
require_once 'connect.php';
$connect = new mysqli($server, $user, $pass, $db);

$sql = "SELECT details.*, planet_list.name AS name FROM details INNER JOIN planet_list ON details.planet_id = planet_list.id";
$result = $connect -> query($sql);

while($rows = $result -> fetch_assoc())
{
    $id = $rows['id'];
    $name = $rows['name'];
    $position = $rows['position'];
    $diameter = $rows['diameter'];
    $mass = $rows['mass'];
    $distance_from_sun = $rows['distance_from_sun'];
    $orbital_period = $rows['orbital_period'];
    $day_len = $rows['day_len'];
    $atmosphere = $rows['atmosphere'];
    $temperature = $rows['temperature'];
    $moons = $rows['moons'];
    $fun_facts = $rows['fun_facts'];
    $language = $rows['language'];

    $planet = new Planete($id, $name, $position, $diameter, $mass, $distance_from_sun, $orbital_period, $day_len, $atmosphere, $temperature, $moons, $fun_facts, $language);
    array_push($planets, $planet);
}

echo json_encode($planets);
$connect->close();