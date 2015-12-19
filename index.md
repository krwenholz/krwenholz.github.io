---
layout: base
title: One step closer to absurdity
tagline:
---

Hi there!

My name is Kyle Wenholz, and this is my attempt at a website representing
myself.  I hope you enjoy your stay.

Over two years ago, I finished studying Mathematics and (two degrees yeah!)
Computer Science at [University of Puget Sound](http://pugetsound.edu),
in the lovely city of Tacoma, Washington. Post-graduation, I started work
at an awesome book company writing software to manage reverse-logistics.
This is what you'd call a great gig with brilliant co-workers, challenges, 
and perks. Let's just say I'm blessed.

As for being blessed, Rachel Willis said yes!  We're married now!  We spend
our time adventuring and discovering new meals in our growing library of 
cookbooks.

## Current Projects ##
* Build more furniture! You can check out a post on the bed I built, and
a few other pieces up through August 2016, [here](/2015/10/31/platform-bed/).
* <strike>Plan an awesome wedding, to an awesome woman.</strike>
* <strike>Finish an Honors Senior Thesis on my Support Vector Machine for the 
timeliness of the ferry system.</strike>
* <strike>Graduate, and get a job I would be thrilled to talk about with my 
non-technical grandmother.  (She's an awesome sounding board.)</strike>  
Success!
* <strike>Continue developing [LendingShack](http://www.lendingshack.com)! (With the help of my great friend and colleague, 
[Josef Lange](http://www.josefdlange.com).)</strike> This one closed down a while ago, but boy was it great.

Want more?  Head to my [projects page](/projects)!

## My Posts (however few they may be) ##

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

