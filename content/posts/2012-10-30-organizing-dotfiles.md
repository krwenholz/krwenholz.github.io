+++
title = "Organizing Dotfiles"
date = 2012-10-30
+++

I did it! My dotfiles are pretty well organized now, and I love it. I recently
swapped out my os only to discover my terminal configuration is now painless.
After installing Git, I just have to clone and then copy things to the correct
places.

If you're reading this, you either know what a dotfile is and want to back up
yours with ease, or you have no idea what I'm talking about. Let's deal with
the latter first, then return to what I did with my files.

## What's a dotfile?

A dot file is basically any file beginning with a '.'. More importantly, and
more generally, these are your configuration files. Think themes, zsh (or bash)
aliases, Git configurations, Conky stuff, X stuff, Vim stuff, or anything you spent
time tweaking the settings for. After tweaking enough settings, you become
attached to your setup and never want to lose it. This is why you back it up!

## How did he do it?

I started by just making a Git repository on Github called dotfiles and cloning
it to my machine. Then I copied stuff in there and started my version control.
This was bad. . . . Why you ask? Well, there are a few reasons.

1. Files with a '.' at the front don't show up well in most file managers.
2. You always have to remember to copy your files when you change them and make
   a new commit.
3. Your process is a bit slow.

After a few months, I think I have some nice solutions to these problems.

1. Copy things in without the '.'. It changes nothing about the contents, and
   you just have to remember to copy them back with a '.' if you want to restore
   a file.
2. This I actually haven't fixed yet, but a quick little Cron job coupled with
   3 will fix it up quickly.
3. I made a short shell script! Just call it 'copyscript.sh', toss in a line
   with 'cp' for every file you want to copy to your repo, and then call it with
   'sh copyscript.sh'. This basically automates the process. My knowledge of
   shell scripting is a bit limited, but I bet you can even do the git commit
   stuff in this.

So there it is, back up your dotfiles and live a saner life. If you want a
really heavy handed way to do it, or some more details, check
[this](http://www.ipreferjim.com/2012/01/dotfiles-backup-using-github/) out.
