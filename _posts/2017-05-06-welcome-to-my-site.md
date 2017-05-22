---
layout: post
title: "Welcome To My Site"
categories: default
author: Ali Raza
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

I welcome everyone to my portfolio website that took a while to complete due learning Jekyll on the go while this was being done. Well what now?. I decided to keep my blog running so I can share some nifty techniques on web development, designing and all things internet.


{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
