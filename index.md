---
layout: page
title: Things as x approaches infinity
tagline:  . . . .
---
{% include JB/setup %}


## My Posts (however few they may be)

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



