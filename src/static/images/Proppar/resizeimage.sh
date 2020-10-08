#!/bin/bash

# Assumes imagemagick is installed.
# ubuntu, debian etc: apt-get install imagemagick
# arch: pacman -S imagemagick
# fedora: dnf install imagemagick
for file in *.png; do convert ProppX1B.png -resize 320x320 -quality 95 ProppX1B.png; done
