#!/bin/sh
​
clear;
​
echo "Killing off all current running instances.";
echo "------------------------------------------";
echo " ";
​
docker kill $(docker ps -q);
​
echo " ";
echo "------------------------------------------";
echo " ";
echo " ";
​
docker run -it -p 8080:8080 --rm --name medical-dashboard-app imightyjun/medical-dashboard-app
