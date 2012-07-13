---
layout: page
title: One step closer to absurdity
tagline: 
---
{% include JB/setup %}

Hi there!

My name is Kyle Wenholz, and this is my attempt at a website representing 
myself.  I hope you enjoy your stay.

I'm currently studying Mathematics and (two degrees yeah!) Computer Science at 
[University of Puget Sound](pugetsound.edu), in the lovely city of Tacoma, 
Washington.  Additionally, I have the incredible fortune of interning for a
certain awesome computing company here in Washington state.

My current projects are to 
 * finish my Honors Senior Thesis. . . on something I haven't though of yet.
 * launch the first product for CentsLess LLC.

### My Posts (however few they may be) ###

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



