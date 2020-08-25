+++
title = "Some Vim Window, Tab, and Buffer Commands"
+++

This is mostly a short record for myself, but here go the basic Vim window,
buffer and tab commands I like to use/know. My encouragement to learn effective
use of all three stems from [this](http://blog.sanctum.geek.nz/buffers-windows-tabs/)
nice post.

## Windows

Windows are for viewing things side by side. I only recently started getting to
know these, but they're super useful and make you look like a total badass.
To create a new window you "split" your current one using the commands
  
 :split <filename optional>
:vsplit <filename optiona>

These split your window horizontally or vertically, respectively, and open the
current (or a new file) as a buffer in that new "window". To navigate you use

    Ctl - w <h,j,k,l>

It's that easy! You just use **Ctl - w** to enter some window command mode and
suddenly your next navigation key moves you a window in that direction. It's
pretty awesome. You can close a window by deleting any buffers it currently
has open. A nice tutorial can be found at [linux.com](http://www.linux.com/learn/tutorials/442415-vim-tips-using-viewports).

## Buffers

Love 'em! A buffer is basically an instance of an open file. The only
commands I really use are

    :bn

for the next buffer,

    :bp

for the previous buffer, and

    :b<num>

to go to the specific buffer number.

I like to use [Mini Buf Explorer](http://vim.sourceforge.net/scripts/script.php?script_id=159)
to see my open buffers and make navigation more easy. A nice tutorial for
getting around in buffers (for real) can be found
[here](http://usevim.com/2012/03/23/buffers/).

## Tabs

Tabs are pretty new for me, but they seem to act like file drawers. It seems
you can keep groups of buffers in them. A good tutorial is at
[linux.com](https://www.linux.com/learn/tutorials/442422-vim-tips-using-tabs).
With the plugin for listing buffers I mentioned earlier, I don't really like
tabs all that much. I'll probably just stick to using buffers. But the link at
the tutorial should help if you're interested.

Best of luck enjoying all the magic of multiple files in Vim!
