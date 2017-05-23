---
layout: post
title: "Dynamic Copyright Year In Footer"
excerpt: I'm sure you hate updating the footer year as much as a next person. Well hate it no more. I added a cool little snippet below to dynamically change footer year every year depending on the current date using javascript
categories: Tutorials
author: Ali Raza
permalink: :categories/:title
main_img: https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9GbGF0LUhlcm8tSGVhZGVyLUtpdC1QcmV2aWV3LTEuanBn&q=90&h=1036&w=1600
---

<div class="post_img">
  <img src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9GbGF0LUhlcm8tSGVhZGVyLUtpdC1QcmV2aWV3LTEuanBn&q=90&h=1036&w=1600">
</div>

I'm sure you hate updating the footer year as much as a next person. Well hate it no more. I added a cool little snippet below to dynamically change footer year every year depending on the current date using javascript

Starting with a base ```<footer>``` in html file

{% highlight html %}
  <footer>
    <p id="copyright">&copy; Copyrights &mdash; <span id="year"></span></p>
    <p>Made with <i class="fa fa-heart"></i> in Reno</p>
  </footer>
{% endhighlight %}

now include javascript to dynamically change the `<span id="year"></span>` in first paragraph.


{% highlight javascript %}
var today = new Date();


(function() {
  $(document).ready(function() {

    $('#year').html(today.getFullYear());
  });

})();

{% endhighlight %}

Viola! and moving forward there woulnd't be any need to change the footer year every now and then, as Javascript has taken care of this for us.