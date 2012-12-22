---
layout: base
title: One step closer to absurdity
tagline:
---

Hi there!

<div style="padding-left:19px;padding-right:10px;float:right;">
    <img src="http://gravatar.com/avatar/5983deba7674b6474166b1eff13f58bc.jpg?s=250"
        style="padding:5px;-moz-border-radius:11px;border-radius:11px;-webkit-border-radius:13px;">
</div>

My name is Kyle Wenholz, and this is my attempt at a website representing
myself.  I hope you enjoy your stay.

I currently study Mathematics and (two degrees yeah!) Computer Science at
[University of Puget Sound](http://pugetsound.edu), in the lovely city of Tacoma,
Washington.  This year, I'll be finishing up my coursework to graduate in
May, all whilst fending off the vicious local wildlife.

##Current Projects##
* Finish my Honors Senior Thesis. . . on something.
* Continue developing [LendingShack](http://www.lendingshack.com)! (With the
help of my great friend and colleague, Josef Lange.)
* Graduate, and get a job I would be thrilled to talk about with my non-technical
grandmother.  (She's an awesome sounding board.)

## My Posts (however few they may be) ##

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

