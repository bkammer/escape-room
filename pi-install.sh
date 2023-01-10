#!/bin/bash

if [ "$(whoami)" != "root" ]
then
    echo "Bitte geben Sie Ihr Passwort ein, wenn Sie dazu aufgefordert werden."
    sudo su -s "$0"
    exit
fi

# Paketmanager updaten und benötigte Pakete installieren
apt update
apt install git

cd ~/
git clone https://github.com/bkammer/escape-room.git

cd ~/escape-room/nginx/

# Führe das Docker Installationsskript aus
chmod u+x ./install_docker.sh
./install_docker.sh

# Starten des Webservers in einem Docker-Container
docker compose up -d

# Point escaperoom.de to local address
ipAdrr="127.0.0.1"
hostname="escaperoom.de"
HOSTS_LINE="$ipAdrr[[:space:]]$hostname"
line_content=$( printf "%s\t%s\n" "$ipAdrr" "$hostname" )
if [ -n "$(grep -P $HOSTS_LINE /etc/hosts)" ]
    then
        echo "$line_content already exists : $(grep $hostname /etc/hosts)"
    else
        echo "Adding $line_content to your /etc/hosts";
        sudo -- sh -c -e "echo '$line_content' >> /etc/hosts";

        if [ -n "$(grep -P $HOSTNAME /etc/hosts)" ]
            then
                echo "$line_content was added succesfully";
            else
                echo "Failed to Add $line_content, Try again!";
        fi
fi

