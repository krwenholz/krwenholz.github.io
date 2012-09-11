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
[University of Puget Sound](http://pugetsound.edu), in the lovely city of Tacoma, 
Washington.  Additionally, I have the incredible fortune of interning for a
certain awesome computing company here in Washington state.

##Current Projects##
* Finish my Honors Senior Thesis. . . on something.
* Continue developing [LendingShack](http://www.lendingshack.com)! (With the
help of my great friend and colleague, Josef Lange.)
* Graduate, and get a job I would be thrilled to talk about with my non-technical
grandmother.  (She's an awesome sounding board.)

## Sage ##
I did quite a bit of work with Sage the last few years.  You can head to 
[Professor Beezer's pages](http://buzzard.pugetsound.edu) for more, but I'll
include a cute way to try out this awesome program below.  The full notebooks
can be found [here](http://sagenb.org).  

The example uses graphs (sort of a Computer Scientist's love).

<script src="http://aleph.sagemath.org/static/jquery.min.js"></script>
<script src="http://aleph.sagemath.org/embedded_sagecell.js"></script>
<script>
    $(function () {
        sagecell.makeSagecell({inputLocation:  '#mycell',
        template:       sagecell.templates.minimal,
        evalButtonText: 'Activate'});
        sagecell.makeSagecell({inputLocation: '#mycell2',
        evalButtonText: 'Evaluate'});
    });
</script>

<div id="mycell"><script type="text/x-sage">
    @interact
    def _(a=(1, 10)):
        print factorial(a)
    </script>
</div>
 
### My Posts (however few they may be) ###

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



