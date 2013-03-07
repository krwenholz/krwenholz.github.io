---
layout: post
title: "Some Vim Window, Tab, and Buffer Commands"
description: ""
category: 
tags: []
---

This is mostly a short record for myself, but here go the basic Vim window,
buffer and tab commands I like to use/know.

## Windows
Windows are for viewing things side by side.  I only recently started getting to
know these, but they're super useful and make you look like a total badass.
To create a new window you "split" your current one using the commands
    
    :split <filename optional>
    :vsplit <filename optiona>

These split your window horizontally or vertically, respectively, and open the
current (or a new file) as a buffer in that new "window".  To navigate you use

    Ctl - w <h,j,k,l>

It's that easy!  You just use __Ctl - w__ to enter some window command mode and
suddenly your next navigation key moves you a window in that direction.  It's
pretty awesome.  You can close out a window by deleting any buffers it currently
has open.

## Buffers

## Tabs
