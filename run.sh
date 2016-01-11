#! /bin/bash
stylus source/stylus -w -o site/css &
jade source/templates/gheader.douban.jade -P -w -O data/gheader-info.json -o site/&
jade source/templates/movie.douban.jade -P -w -O data/movie-info.json -o site/&
http-server site/ -p 9890
