---
layout: post
title: "Optimising requirejs with CDN fallback"
date: 2014-07-04 20:00
comments: true
tags: JavaScript, requirejs, r.js
featureImg: "/images/requirejs-optimise.jpg"
snippet: "<p>If you want to utilise a CDN with requireJS you might find some quirks when it comes to the optimiser r.js.</p>"
---
![Requirejs and Grunt task runner used to optimise require with r.js](/images/requirejs-optimise.jpg)

If you want to utilise a CDN with requireJS you might find some quirks when it comes to the optimiser r.js. As I found at when trying to optimise my modules loading jQuery through a CDN with a local fallback, I received the erorr

	[Error: Error: paths fallback not supported in optimizer. Please provide a build config path override for jquery

The issue [has been discussed and closed](https://github.com/jrburke/requirejs/issues/791) on the r.js issues list. The answer given is to supply a path to jQuery, so that the grunt task knows the path for jQuery. Whilst this does fix the error for r.js it's not exactly what we have in mind for a fallback, as this will cause the local jQuery fallback file to be included in your optimised requirejs, which kind of defeats of the purpose.

The way around this is pretty simple, instead of supplying a path to your local file which you want excluded you can use the special ["empty:" paths config](http://requirejs.org/docs/errors.html).f