---
layout: base
title: Post Archive
permalink: /archive/
---
## Post Archive ##

{% for post in site.posts %}
<p>
    <h5><a href="{{ post.url }}">{{ post.title }}</a></h5><h6>{{ post.date | date: "%A, %B %d, %Y" }}</h6>
    <span>{{ post.description }}</span>
</p>
{% endfor %}
