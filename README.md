# DogsDogsDogs

## Description

Pratique Créative de l'Objet Artistique Numérique - Proof of concept (Stratum - Chevalvert)

The repository contains two code files : one node.js file and one arduino file. The arduino code works with an Arduino Mega2650 (or Uno) and an Ethernet Shield.

And of course, a picture of a dog from the [Dog API](https://dog.ceo/dog-api/).

You can also find a video demo of the project [here](https://www.youtube.com/watch?v=vyIgGuk-BpE).

## Instructions

- Set the IP address of your Ethernet adapter to 198.168.1.97 with a 255.255.255.0 mask.
- The type of led strip used is : WS2812 GRB 30 led/m with a 5V power supply
- Plug the data cable of your LED strip to pin 6 of your Arduino/Ethernet Shield
- To run the node.js code, use the command : `node SendDogs.js`
