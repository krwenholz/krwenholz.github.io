---
layout: base
title: One step closer to absurdity
tagline:
---

Hi there!

My name is Kyle Wenholz, and this is my attempt at a website representing
myself.  I hope you enjoy your stay.

I just finished studying Mathematics and (two degrees yeah!) Computer Science at
[University of Puget Sound](http://pugetsound.edu), in the lovely city of Tacoma,
Washington. Post-graduation, I have a job at an awesome local company: working
in reverse-logistics.  This is what you'd call a great gig with great 
co-workers, challenges, and perks. Let's just say I'm blessed.

As for being blessed, Rachel Willis said yes!  We're engaged!  You can find
some more information about the shindig in those invitations we sent out, or 
just shoot me an email.

## Current Projects ##
* Think up something awesome to do with a functional programming language. 
Current ideas:
  * Parse my huge collection of WSDOT ferry delay emails.
  * Work out some linear algebra.
* Plan an awesome wedding, to an awesome woman.
* <strike>Finish an Honors Senior Thesis on my Support Vector Machine for the 
timeliness of the ferry system.</strike>
* <strike>Graduate, and get a job I would be thrilled to talk about with my 
non-technical grandmother.  (She's an awesome sounding board.)</strike>  
Success!
* <strike>Continue developing [LendingShack](http://www.lendingshack.com)! (With the help of my great friend and colleague, 
[Josef Lange](http://www.josefdlange.com).)
</strike>  
This one closed down a while ago, but boy was it great.

Want more?  Head to my [projects page](/projects)!

## My Posts (however few they may be) ##

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

