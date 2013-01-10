honeybank
=========
Changelog:

Generated sencha app source files. Turns out you need to download and install the Sencha Cmd program too. After that I set up the git repo in the /www/ folder I can server files out of (localhost) and moved the project files in there. For giggles I dropped a copy of the whole Sencha SDK in there so I could play with the example apps. I guess Sencha needs a webserver to work before compiling. What a slop nugget.

Long long story short, I can hit localhost/honeybank/ and it serves up to folders. One has the static app (just html/css) and the other has the full blown generated sencha app. I guess once the app does what we want, to compile we are going to have to move the files from the /honeybank-sencha-app/ folder to the root of /honeybank/ and set up the config files for phonegap/cordova/whateveritscalled.

=========

A honey pot app that looks like your bank account. If anyone starts snooping around in the app, we email you and let you know when it happened.