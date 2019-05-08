<center><img style="text-align:center" src="Icon.png" width="125px"></center>

<center><h1 style="font-weight:700;font-size:35px;text-align:center;">blurrypwn - a webkit exploit</h1></center>

## **How did i discover it?**
I was testing out the new features of backdrop-filter.
And a person I know told me there is better perfomance when having multiple elements with backdrop-filter rather than one with less blur, now obviously I knew that was incorrect but I needed to prove him wrong... And it turns out he was joking ;(
Wasted time I thought until I found my devices were starting to become slow.

Then I tested it and found out how it works.

If anybody else has discovered I don't mean to take the credit for discovering this first.
And the name I came up with, but again, if this exploit already has been published before then just go that ones name unless your using my code.


## **Why does this work and how?**
Easy. It adds divs very large sizes (900000px doesn't need to be that big) with a backdrop filter with a blur.
Which has more divs inside with blur and so on... That may be tooo simple explanation so let me break it down!

## **pwn.add()**
With the function pwn.add() you make a new div, now doing it again makes another div inside the previous.
Now with pwn.start() it continuously makes new divs every 0.001 seconds also using pwn.add()

Now most browsers can easily do all this as it's just solid pixels and it actually transparent in my code.
But with some fiddling, you can make it hard for the browser to render...
But yeah, as states most browsers have some smart ways of not having to render stuff that ain't on screen, like transparent elements.

### *Little sidenote! Around 3500-4000 divs are need to crash the browser or device, atleast in most cases! It may be less it may be more*

Now, you can indeed just have 4000 divs already in the HTML file and just add a blur to it, instead of doing it after the HTML has loaded and also doing it with JavaScript, but that's no fun...

**Now onto the crashing!**


## **pwn.start()**

As mentioned before all pwn.start() does it keep executing pwn.add().
BUTT, it does a small bit more! ;)

Such as, adding a backdrop-filter on 1000 divs per second, yeah nobody has said that and not thought a browser would crash...
I mean it's pretty simple exploit, and I actually submitted it to Chromium, yet nobody has done shit about it...
Most iOS devices even crash instantly or very very quick... On most browsers. I haven't been able to check latest iOS versions, but most likely it still works, I wouldn't be suprised whatsoever.

## **pwn.end()**

pwn.end() simply as mentioned before removes the backdrop-filter.
Therefore almost rendering the exploit useless

## **Compatibility and Bug Report**

As mentioned above, I submitted a bug report to Chromium already, they haven't done anything about it.
So therefore I am now sharing it with people like you! 

Now for compatibility as mentioned it should work on the newest version of iOS (12.Something)
And lowest version should be around iOS 7 as they implemented backdrop-filter back then.

So this is the most one of the most wide spread webkit exploit I've seen, there are still a few that tops this, but not many...
