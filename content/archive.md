---
layout: base
title: Post Archive
permalink: /archive/
---
## Post Archive ##

{% for post in site.posts %}
  <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
  {{ post.date | date: "%A, %B %d, %Y" }}: {{ post.description }}
{% endfor %}
