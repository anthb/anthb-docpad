---
layout: post
title: "CSSConfAU notes"
date: 2014-04-09 16:00
comments: true
tags: docpad
featureImg: "/images/cssconfau-14.jpg"
snippet: "<p>Early in April I attended CSSConfAu which teamed up with JSConfAu for a fantastic two days of front-end.</p>"
---

On April 9 I attended [CSSConfAu](http://2014.cssconf.com.au/) being the first of its kind in Australia. Previously the only big web conferences I had attended were the superbly run web directions conferences, so was very interested to see how this (and JSConf) would compare. There was a few moments when the polish was a bit lacking such as awkward segways and lack of background music between presentations, but other than those *very minor* points the entire day was really well run. It felt very fun and personal, from the food trucks to the laid back venue and lots of cool little takeaways I could really tell the amount of hard work and passion that the entire [team](http://2014.cssconf.com.au/#team) put into the day. It was a fantastic day, with some great presentations and am really looking forward to the next event!

I have compiled some of my notes of presentations that caught my interest. it's hard to get the context without seeing the talk, if you have questions hit me up in the comments or search for the presenter as I would say they have more info available.


###Chris Wright - Surprise and Delight
___

* Bring joy and excitement - Humanize the machine
* Enhancing storytelling
* Lessons from the past - The experience impact
* Oleg Solonka? CoDrops article
* Templating <use>. Definitions
* Viewbox coords and ratio
* Firefox set overflow:visible (firefox) spec says it's hidden by default
* Clipping and masking - good for animation
* Filters - Drop shadow filter, around the path unlike box shadow
* Noise filter - Over RGB and can desaturate
* Type along path - xlink of text references a curve path
* Type along path has issues in FF (offset)
* Line animation 
	* Dash array - first number width, second the gap between
	* Dash offset sets where it begins


###Nicolas Gallagher - About Components
___

* Leaky abstractions increase complexity - all non trivial apps leak, minimise.
* Component is a module that encapsulates pre defined function
* Component a, b, c all separate (HTML, CSS, JS, Text etc) combine together to build something
* Adaptable over reusable - Might work at the time, but reuse can change in future
* SUIT CSS - Methodology and simple set of tools
* component.js - can include dependencies on other components


###Connor Sears @connors
___

5 reasons why code is better (than design) - Context of getting to coding stage as early as possible.

1. It elevates the conversation (above that is not 'blue' enough, makes it more 'real')
2. Lets you use real data (PS lies, you make it 'look good', code exposes your poor decisions)
3. Enforces systemic design (Thinks design horizontally everywhere, not just in one place)
4. Speak the same language
5. Closer to the truth (closer to the real thing that you're making)


* Make the transition to production easier - Write code that reflects your production architecture

Tools

* goratchet.com - Cool prototyping platform for mobile apps
* framerjs.com - prototyping tool for animation and interaction on desktop / mobile


###Ana Tudor - Transforms and Poly... what
___

* All elements have same origin, absolutely positioned. Translate from there
* transform-style: flat (by default) can alter to preserve-3d
* Has a lot of collections on her codepen


###Chris Giffard - Crisis Averted
___

* BAS - Behaviour Assertion Sheets
* satus-code: 200
* nom install -g bas 
* Check a huge amount of content for 'business requirements'
* gives you selectors that violated (open the web inspector and find culprit)
* As is a superset of CSS, can easily be refactored to be written as BAS
* More than just failures, you can get information on selectors (data)
* bas.cgiffard.com
* rework css parser (base for writing a preprocessor)
* Think about new ways to explore tools you're already using now

###Lea Verou - The Chroma zone
___

* All the slides / material on her site / github
* use of css filters and hue is awesome.


###Simurai - Styling with strings
___

* CSS (currentColor and fill) very cool way of doing simple theming. 








