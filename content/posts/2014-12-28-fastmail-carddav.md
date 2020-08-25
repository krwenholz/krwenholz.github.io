+++
title = "CardDav with Fastmail"
description = "Setting up and loving CardDav with Fastmail"
+++

So you heard about Fastmail's [CardDav beta](http://blog.fastmail.com/2014/12/22/carddav-beta-release/)?
Finding their [setup page](https://beta.fastmail.com/help/clients/applist.html) lacking?

So did I!

Taking a look at their [servers and ports page](https://www.fastmail.com/help/technical/servernamesandports.html?domain=fastmail.fm)
(at the time of this writing) gave me the clues I needed. Try these settings with the "CardDav-sync beta" app:

<table>
  <tr><td>Server</td> <td>https://carddav.messagingengine.com/</td></tr>
  <tr><td>SSL</td> <td>Yes</td></tr>
  <tr><td>Username</td> <td>Your FastMail email address, including the domain</td></tr>
  <tr><td>Password</td> <td>Your FastMail password (probably want to create an alternative login)</td></tr>
</table>
That'll get you started. Now go have yourself some fun times syncing contacts.
