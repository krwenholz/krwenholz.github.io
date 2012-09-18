---
layout: page
title: One step closer to absurdity
tagline: 
---
{% include JB/setup %}

Hi there! 

<div class="rotate" style="padding-left:19px;padding-right:10px;float:right;">
<div class="sticky">
    <img src="media/kittyAndI.jpeg" width="245" height="210"
    style="padding:5px;-moz-border-radius:11px;border-radius:11px;-webkit-border-radius:13px;">
</div>
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



