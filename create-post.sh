#!/bin/bash

if [ "$#" -ne 1 ] ; then
  echo "Usage: $0 <title>" >&2
  exit 1
fi


title=`echo "$1" |sed 's/ /-/g'|tr '[:upper:]' '[:lower:]'`
fileName="_posts/`date +%Y-%m-%d-$title.md`"

touch $fileName

cat > $fileName <<EOF
---
layout: post
title: "$1"
date:  `date "+%Y-%m-%d %H:%M:%S %z"`
description: World
img: 2018/04/books.jpg # Add image post (optional)
tags: [komentar]
author: Jan Peter Alexander Rajagukguk # Add name author (optional)
---

Hello.

EOF
