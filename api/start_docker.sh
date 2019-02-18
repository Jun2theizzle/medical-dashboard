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
docker run -it -p 3000:3000 --rm --name medical-dashboard-api imightyjun/medical-dashboard-api
