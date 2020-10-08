#!/bin/bash

# Assumes imagemagick is installed.
# ubuntu, debian etc: apt-get install imagemagick
# arch: pacman -S imagemagick
# fedora: dnf install imagemagick
for file in *.jpg; do convert $file -resize 320x320 -quality 95 $file; done
