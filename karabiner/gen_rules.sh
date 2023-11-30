#!/bin/bash

[ -d dst ] || mkdir dst

for file in src/*; do
    dst=${file//src/dst}
    dst=${dst//.js/.json}
    ./core/bin/karabiner_cli --eval-js $file > $dst
done
