<!-- .slide: data-background="images/backgrounds/shutterstock_150137660.jpg" data-state="inverted" -->

# HTTP/2

The Future is Now.

---
<!-- .slide: data-background="images/backgrounds/shutterstock_197424404.jpg" data-state="inverted" -->

We are writing the year...

<h1 class="fragment">1991</h1>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_147916586.jpg" data-state="inverted" -->

# It marks the end of the Soviet Union
---
<!-- .slide: data-background="images/backgrounds/nevermind.jpg" data-state="inverted" -->

# Nirvana Nevermind
---
<!-- .slide: data-background="images/backgrounds/1280px-Tim_Berners-Lee_CP_2.jpg" data-state="inverted faded grayscaled" -->

and

# HTTP/0.9

mentioned for the first time
---
<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted faded" -->

# 1996

officially standardized as HTTP/1.0
---
# HTTP/1.0

One short lived TCP connection per HTTP request/response pair

![HTTP/1.0 TCP](images/HTTP-1.0-TCP.png)
---
# HTTP/1.0

Data is being transferred in ASCII encoding

![HTTP-Request](images/HTTP-Request.png)
---
# HTTP/1.0
<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted faded" -->

Headers are arbitrarily extendable and are prepended to every single request

```
GET /fotostrecke/screenshots-spiegel-online-1996-bis-heute-fotostrecke-16056-3.html HTTP/1.1
Host: www.spiegel.de
Connection: keep-alive
Cache-Control: no-cache
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Pragma: no-cache
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36
DNT: 1
Accept-Encoding: gzip,deflate,sdch
Accept-Language: de-DE,de;q=0.8,en-US;q=0.6,en;q=0.4,fr;q=0.2
Cookie: POPUPCHECK=1402636825271; JSESSIONID=FC8674D0216AB1B92E09619BCD8CC9C7; spVcData2=6-10%3B10-15; __utma=159392383.976977501.1321345516.1402553897.1402569936.627; __utmc=159392383; __utmz=159392383.1402553897.626.40.utmcsr=facebook.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=159392383.|1=custID=f380b31359c26298908199a247d8a3f1=1; mx_nam_id=03de4a6b-b79e-4c74-81eb-7c4999e36205
 ```
---
<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted faded" -->

# starting in 1997

HTTP/1.1 is being worked on. It will only be finalized in 1999.
---
# HTTP/1.1

specifies persistent TCP connections

![HTTP/1.1 TCP](images/HTTP-1.1-TCP.png)
---
# Persistent TCP Connections

...help diminish the negative effect of TCP's "slow start" phase

![TCP Slow Start](images/tcp_slow_start.png)

[Source](https://libosong.appspot.com/spdy/index.html#20)
---
# TCP Slow Start

![TCP Slow Start](images/slow_start_graph.png)

[Source](http://packetlife.net/blog/2011/jul/5/tcp-slow-start/)
---
# TCP Slow Start

![TCP Slow Start](images/tcp_slow_start_request.png)

[Source](https://libosong.appspot.com/spdy/index.html#21)
---
# HTTP/1.1

To protect the servers from connection overload, the number of allowed concurrent connections is capped:

> single-user client SHOULD NOT maintain more than 2 connections with any server or proxy.

In practice browsers held up to 6 connections per host open.

<p class="fragment">If a browser is behind a proxy <a href="https://www.stevesouders.com/blog/2008/03/20/roundup-on-parallel-connections/">this is reduced to 2 - 4</a>, depending on the browser.</p>
---
# HTTP/1.1

Also specifies "pipelining"

![HTTP/1.1 TCP](images/HTTP-1.1-TCP-Pipelining.png)
---
# HTTP/1.1

With pipelining a follow-up request can be sent, BEFORE the response for the previous one was received.

![HTTP/1.1 TCP](images/HTTP-1.1-TCP-Pipelining-2.png)
---
# HTTP/1.1

With pipelining, latency is not adding up any more between multiple requests

<p class="fragment">Oh wait, I mean: WOULD...</p>
---
<!-- .slide: data-background="images/reactions/tumblr_lbdnzkTGkq1qe0eclo1_r1_500.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
<br>
# Proxies said "no" to Pipelining.

<p class="fragment">*swear word*</p>
---
# Pipelining Support

| System  |                                   |
|---------|-----------------------------------|
| IE/EDGE | NO                                |
| Chrome  | YES, but disabled                 |
| Firefox | YES, but disabled                 |
| Server  | YES                               |
| Proxies | NO                                |

[Source](https://libosong.appspot.com/spdy/index.html#17)
---
<!-- .slide: data-background="images/backgrounds/shutterstock_197553677.jpg" data-state="inverted" -->

# Meanwhile in the Web...
---
<!-- .slide: data-background="images/backgrounds/website-1991.png" data-state="inverted" -->

# Website 1991
---
<!-- .slide: data-background="images/backgrounds/website-1991.png" data-state="inverted faded" -->

# 1 Request
---
<!-- .slide: data-background="images/reactions/tumblr_inline_my8bn7Af5g1raprkq.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Fast and smooth, a joy!
---
<!-- .slide: data-background="images/backgrounds/website-1996.png" data-state="inverted" -->

# Website 1996
---
<!-- .slide: data-background="images/backgrounds/website-1996.png" data-state="inverted faded" -->

# 7 Requests
---
<!-- .slide: data-background="images/reactions/tumblr_inline_my8bn7Af5g1raprkq.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Everything fine <3!
---
<!-- .slide: data-background="images/backgrounds/website-1998.png" data-state="inverted" -->

# Website 1998
---
<!-- .slide: data-background="images/backgrounds/website-1998.png" data-state="inverted faded" -->

# 85 Requests
---
<!-- .slide: data-background="images/reactions/r4lKi9i.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Uhm... 85 requests?
---
<!-- .slide: data-background="images/backgrounds/website-2014.png" data-state="inverted" -->

# Website today
---
<!-- .slide: data-background="images/backgrounds/website-2014.png" data-state="inverted faded" -->

# 172 Requests
<h1 class="fragment">(this is without ads!)</h1>

---
<!-- .slide: data-background="images/reactions/OaR0Y38.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# 172 requests? WTF!
---
# 1995 - Today

![HTTP Archive Trends](images/HTTP-Archive-Trends-Total-Size.png)

HTTP request increase: from 3 to 96
---
<!-- .slide: data-background="images/ecommerce-loadingtime.png" data-state="inverted" -->

<br><br><br><br><br>
<br><br><br><br><br>
<br><br><br><br>
[Source](http://blog.radware.com/applicationdelivery/applicationaccelerationoptimization/2014/04/report-state-of-the-union-for-ecommerce-web-performance-spring-2014/)
---
<!-- .slide: data-background="images/backgrounds/shutterstock_195671744.jpg" data-state="inverted" -->

# Broadband to the Rescue?
---
# Nope!

![Bandwidth Benefits](images/Bandwidth-Benefits.png)

[Source](https://docs.google.com/a/chromium.org/viewer?a=v&pid=sites&srcid=Y2hyb21pdW0ub3JnfGRldnxneDoxMzcyOWI1N2I4YzI3NzE2)
---

> An increase from 5Mbps to 10Mbps results in a disappointing 5% improvement in page load times.

[Google](https://docs.google.com/a/chromium.org/viewer?a=v&pid=sites&srcid=Y2hyb21pdW0ub3JnfGRldnxneDoxMzcyOWI1N2I4YzI3NzE2)

---

# Problem No. 1: Latencies!

---

# Latency due to distance

| within Germany         | < 50 ms       |
|------------------------|---------------|
| to the United States   | 100–150 ms    |
| to Asia                | up to 300 ms  |

---

# Latency due to technology

| 100 MBit Ethernet      | 1 ms        |
|------------------------|-------------|
| WiFi                   | 10-25 ms    |
| Cable                  | 10 ms       |
| DSL with Fastpath      | 40 ms       |
| DSL without Fastpath   | 55 ms       |
| 4G                     | 100–200 ms  |
| 3G                     | 200–400 ms  |
| 2G                     | 700–1000 ms |

---

# Blocking due to serverside processing

The loss of time here solely depends on server speed
---

# The Effect of Latencies: ...

---

<video data-autoplay class="stretch" loop src="images/Bandbreite%20low.mp4"></video>

---

| Section          | Loss of time |
|------------------|--------------|
| Distance Latency | 90 ms       |
| Time to Transfer | 135 ms       |
| Server Processing | 45 ms        |
| **Total**        | **270 ms**   |

---

# Impact of Bandwidth Tripling (3x): ...

---

<video data-autoplay class="stretch" loop src="images/Bandbreite%20low%20and%20high.mp4"></video>

---

| Section          | 1x Bandwidth  | 3x Bandwidth  |
|------------------|---------------|---------------|
| Distance Latency | 90 ms         | 90 ms         |
| Time to Transfer | <span style="color: #FF6666">135 ms</span>        | <span style="color: #66FF99">45 ms</span>         |
| Server Processing | 45 ms         | 45 ms         |
| Total            | <span style="color: #FF6666">270 ms</span>        | <span style="color: #66FF99">180 ms</span>         |

---

| Section          | 1x Bandwidth  | 10x Bandwidth |
|------------------|---------------|---------------|
| Distance Latency | 90 ms         | 90 ms         |
| Time to Transfer | <span style="color: #FF6666">135 ms</span>        | <span style="color: #66FF99">13 ms</span>         |
| Server Processing | 45 ms         | 45 ms         |
| Total            | <span style="color: #FF6666">270 ms</span>        | <span style="color: #66FF99">148 ms</span>         |

---

<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted" -->

# Problem No. 2: HTTP/1.x!

---
# Very little Parallelization

![HTTP Blockade](images/HTTP-Blockade.png)

BrowserS only open up 6 parallel TCP connections.

<p class="fragment">(or 2 - 4 behind a proxy)</p>

<p class="fragment">Result: latencies add up</p>
---
# Unused idle times

![HTTP Latencies](images/HTTP-Latencies.png)

Requests need to be processed in order.

Pipelining would help.

<p class="fragment">Also a problem: the &quot;First in Line Blocking&quot;<p>
---
# No way to abort Requests

Once all TCP connections are saturated with requests, the browser cannot change its mind and needs to stick with its decision.

<p class="fragment">Unfortunate, when exactly then the browser discovers an important `<script>` tag in the foot of a page.</p>
---
# Bloated Headers

The constant sending along of all headers leads to slower requests.

<p class="fragment">An average header is 600 bytes large.</p>

<p class="fragment">A typical news page header with cookies can be as large as 1 KB.</p>

<p class="fragment">Extra transfer time on a 1 MBit/s upstream: 10 ms per request.</p>
---
<!-- .slide: data-background="images/reactions/tumblr_inline_mmrb6wlC0g1qz4rgp.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# What countermeasures do we usually take?
---
<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted faded" -->

# Concatenating

```js
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/'));
});
```
---
<!-- .slide: data-background="images/old_structure_resized.png" data-state="inverted faded" -->

# Bitmap Spriting

```js
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('path/to/output/'));
});
```
---
<!-- .slide: data-background="images/1351212646_ap_icons_white_social.png" data-state="inverted faded" -->

# SVG Spriting

```html
<svg viewBox="0 0 100 100">
   <use xlink:href="defs.svg#icon-1"></use>
</svg>
```
---
<!-- .slide: data-background="images/icomoon.png" data-state="inverted faded" -->

# Using Icon Fonts
---
<!-- .slide: data-background="images/datauri.png" data-state="inverted" -->

# Inlining of Resources via Data URIs
<br><br><br><br>
---
<!-- .slide: data-background="images/huey_pushed_vietnam.jpg" data-state="inverted faded" -->

# Drawback:

If only a single element within one of these packages is updated, that package needs to be retransferred as a whole
---
<!-- .slide: data-background="images/backgrounds/shutterstock_201459827.png" data-state="inverted faded" -->

# Another Counter Measure: Distributing Resources over Multiple Hosts

<p class="fragment">&quot;Domain Sharding&quot;</p>

<ul>
	<li class="fragment">each additional host allows for 6 additional TCP connections</li>
	<li class="fragment">cookie headers will only be sent to the main host</li>
</ul>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_201459827.png" data-state="inverted faded" -->

# Drawbacks:

Each additional host needs extra DNS resolving
<p class="fragment">Each additional TCP connection needs to go through the TCP slow start phase.</p>
<p class="fragment">With more than 3 hosts the advantage turns into a disadvantage.</p>
---
<!-- .slide: data-background="images/reactions/tumblr_inline_n1h1w9xP6K1raprkq.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Man, what an effort!
---
<!-- .slide: data-background="images/reactions/SJxHr.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Enter HTTP/2!
---
<!-- .slide: data-background="images/backgrounds/timeline.jpg" data-state="inverted" -->
<br><br>

# HTTP/2 &asymp; SPDY

<br><br><br><br>
<br><br><br><br>

(also see: [Genesis](https://en.wikipedia.org/wiki/HTTP/2#Genesis_in_and_later_differences_from_SPDY))
---
# HTTP/2
<!-- .slide: data-background="images/backgrounds/1761049_o.gif" data-state="inverted" -->

Data is transferred binary encoded

<ul>
	<li class="fragment">more efficient to parse</li>
	<li class="fragment">more compact</li>
	<li class="fragment">less error prone</li>
</ul>
---
# HTTP/2
<!-- .slide: data-background="images/backgrounds/1761049_o.gif" data-state="inverted" -->

> textual protocols like HTTP/1.x [...] often have a number of affordances to “help” with things like whitespace handling, capitalisation, line endings, blank links and so on.

[Source](http://http2.github.io/faq/#why-is-http2-binary)
---
# HTTP/2

Header data is exchanged only once between the parties. From then on, they apply automatically to all subsequent requests.

<p class="fragment">If certain headers need to change at a later point in time, only these changes are transmitted (e.g. after a login).</p>
---
# HTTP/2

Headers are being compressed

> Google observed an ~88% reduction in the size of request headers and an ~85% reduction in the size of response headers after enabling compression. This amounted to a saving of between 45 and 1142 ms in the overall page load time.

[Source](http://blog.teamtreehouse.com/making-the-web-faster-with-spdy)
---
# HTTP/2

[Tests from the University of Delaware](http://www.eecis.udel.edu/~amer/PEL/poc/pdf/SPDY-Fan.pdf):

| Request headers | 1st         | 2nd        |
|-----------------|-------------|------------|
| HTTP Request    | 686.2       | 636.4      |
| SPDY Request    | 379.4 (55%) | 68.6 (10%) |

| Response headers | 1st         | 2nd        |
|------------------|-------------|------------|
| HTTP Response    | 444.6       | 418.7      |
| SPDY Response    | 202.0 (45%) | 69.2 (17%) |
---
<!-- .slide: data-background="images/backgrounds/shutterstock_200991887_B.jpg" data-state="inverted faded" -->

# HTTP/2

Only a single TCP connection to each host is opened.

<p class="fragment">All transfer fragments are woven into this one stream<span class="fragment"> (multiplexed)</span></p>

<p class="fragment">The result is therefore automatic spriting/concatenation on protocol level!</p>
---
<!-- .slide: data-background="images/HTTP-1.0-vs-SPDY.png" data-state="inverted" -->
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
[Source](http://de.slideshare.net/AndyDavies/are-todays-good-practices-tomorrows-performance-antipatterns-28286548#)
---
# Comparison

<video data-autoplay class="stretch" loop src="images/mod_spdy%20World%20Flags%20Demo.mp4"></video>

---
<!-- .slide: data-background="images/backgrounds/shutterstock_199661090_b.jpg" data-state="inverted" -->

<br><br><br><br>

## Prioritized Streams

HTTP/2 can change the mixing ratio of the data woven into its data stream at any time and adapt it to new conditions.

<p class="fragment">It is also possible to cancel the transfer of a file mid-flight.</p>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_199661090_b.jpg" data-state="inverted" -->

<br><br><br><br>

## Prioritized Streams

The browser can request resources with different priorities:

<ul>
	<li class="fragment">high: main document & frames</li>
	<li class="fragment">medium: JavaScript, CSS and fonts</li>
	<li class="fragment">low: `<link rel="subresource">`, `<video>`, `<audio>`, `<object>` and AJAX calls</li>
	<li class="fragment">Very low: images, favicon, print styles</li>
</ul>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_199661090_b.jpg" data-state="inverted" -->

<br><br><br><br>

## Prioritized Streams

The server can also push resources that it considers relevant on its own initiative.

<p class="fragment">That's called "Server Push".</p>
---
## Server Push

Of 640 image fragments, those with the lettering are pushed first:

<video data-autoplay class="stretch" loop src="images/server-push.mp4"></video>
<!-- <iframe width="420" height="315" src="//www.youtube.com/embed/4Ai_rrhM8gA" frameborder="0" allowfullscreen></iframe> -->
---
<!-- .slide: data-background="images/backgrounds/shutterstock_201625775_b.jpg" data-state="inverted faded" -->

# HTTP/2

is backwards-compatible and completely transparent.

<p class="fragment">HTTP/2 is always TLS-encrypted, so that no transmitting instance or proxy can manipulate and break anything.</p>

<p class="fragment">(to avoid what happened with HTTP pipelining)</p>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_201625775_b.jpg" data-state="inverted faded" -->

# HTTP/2

The TLS handshake phase is also used to inform each other about HTTP/2 capabilities.
---
That said, a negotiation via unencrypted HTTP is possible:
```
GET /page HTTP/1.1
Host: server.example.com
Connection: Upgrade, HTTP2-Settings
Upgrade: HTTP/2.0
HTTP2-Settings: (SETTINGS payload in Base64)
```
Remote peer cannot handle HTTP/2:
```
HTTP/1.1 200 OK 3
Content-length: 243
Content-type: text/html
(... HTTP 1.1 response ...)
```
Remote peer can handle HTTP/2:
```
HTTP/1.1 101 Switching Protocols 4
Connection: Upgrade
Upgrade: HTTP/2.0
(... HTTP 2.0 response ...)
```
<p class="fragment">(application scenario: server-to-server communication)</p>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_334616300.jpg" data-state="inverted faded" -->

# Serverside Advantages

> SPDY clients consume one Apache worker instead of six

[Source](http://www.neotys.com/blog/performance-of-spdy-enabled-web-servers/)
---
<!-- .slide: data-background="images/backgrounds/shutterstock_334616300.jpg" data-state="inverted faded" -->

# Benchmark

> Ramp-up from 1 to 1000 users for 20 minutes.<br>1 page call, wait for 5s, restart.

[Source](http://www.neotys.com/blog/performance-of-spdy-enabled-web-servers/)
---
<!-- .slide: data-state="smaller" -->

# Results

|                                                         | HTTP                                     | HTTPS                                    |SPDY                                     |
|---------------------------------------------------------|------------------------------------------|------------------------------------------|-----------------------------------------|
| Max. pages/s                                            | 16.3 @ 120 users                         | 15.9 @ 120 users                         | 98 @ 777 users                          |
| Response @ 100 users                                    | 1.1s                                     | 1.3s                                     | 1.1s                                    |
| Response @ 120 users                                    | 1.4 s                                    | 1.5s                                     | 1.1s                                    |
| Response @ 200 users                                    | 7.1s                                     | 7.8s                                     | 1.1s                                    |
| Response @ 777 users                                    | 70.2s                                    | 72s                                      | 2.7s                                    |
| First error                                             | 405 Users                                | 225 Users                                | 884 Users                               |

---
# Memory Consumption

| System Memory | 01:00    | 02:00    | Diff = Consumed              |
|---------------|----------|----------|------------------------------|
| HTTP          | 3,357 MB | 3,416 MB | 59 MB                        |
| HTTPS         | 3,500 MB | 3,579 MB | 79 MB                        |
| SPDY          | 3,607 MB | 3,631 MB | 24 MB                        |

---
# CPU Idle-Time

![CPU Idle Times](images/spdy-linux-cpu-idle.png)

(less is better)

---
<!-- .slide: data-background="images/Caniuse-HTTP2.png" data-state="inverted" -->

# Browser Support 
# 86.81%
---
# Server Support

* Apache HTTP Server 2.4.17+
* Apache Tomcat 8.5+
* NGINX 1.9.5+
* IIS on Windows 10 or Windows Server 2016+
* Node.js 8+
* Jetty 9.3+
* and many more&hellip;

See [HTTP/2 Implementations](https://github.com/http2/http2-spec/wiki/Implementations) and [Wikipedia](https://en.wikipedia.org/wiki/HTTP/2#Software_and_services_supporting_HTTP.2F2)
---
# CDN Support

* Akamai (with Server Push!)
* CloudFlare (with Server Push!)
* Fastly (with Server Push!)
* Microsoft Azure
* Amazon CloudFront
* and a few more.

[Wikipedia](https://en.wikipedia.org/wiki/HTTP/2#Software_and_services_supporting_HTTP.2F2)
---
<!-- .slide: data-background="images/reactions/tumblr_inline_mxzcnayKCb1raprkq.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
# Recommendations
---
<!-- .slide: data-background="images/backgrounds/shutterstock_156956813_b.jpg" data-state="inverted faded" -->

<br><br><br><br>
<br><br><br><br>
<br><br><br>
# Start using HTTP/2 now!

<p class="fragment">(If necessary via [intermediate HTTP/2-capable load balancer](https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwih0sauv9rQAhUFEywKHYS3DTAQFggaMAA&url=https%3A%2F%2Fwww.safaribooksonline.com%2Flibrary%2Fview%2Fhigh-performance-browser%2F9781449344757%2Fch13.html&usg=AFQjCNGJiVCDdoF0iAC2ch9b66idBsmcuA&sig2=_nJIXeYIw0Xn2xmEnoSlpA&bvm=bv.139782543,d.bGg))
---
<!-- .slide: data-background="images/backgrounds/shutterstock_201459827.png" data-state="inverted faded" -->

# Avoid Domain-Sharding!

It doesn't give us advantages any more.

<p class="fragment">(instead it only creates superfluous DNS lookups)</p>

<p class="fragment">also: A single host can better manage resource prioritization.</p>

<p class="fragment">[re-evaluate the use of CDNs](https://thethemefoundry.com/blog/why-we-dont-use-a-cdn-spdy-ssl/).</p>
---
<!-- .slide: data-background="images/backgrounds/shutterstock_4021051.jpg" data-state="inverted faded" -->

# Avoid spriting and concatenation!

Stop trying to reduce the amount requests<span class="fragment"> - [if it's not a thousand](https://medium.com/@asyncmax/the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2-437c37efe3ff)</span>

<p class="fragment">(that way we get closer to the concept of delta updates)</p>
---
# Activate Server Push

Configure server push for all critical resources!

---
# Activate Server Push

Is has established itself to describe resources to push via Link headers of type preload:

```
Link: "</assets/css/common.css>;rel=preload;as=style"
```

Should the header be meant for the client and not as push hint, set an additional `no-push` property:

```
Link: "</assets/css/common.css>;rel=preload;as=style;no-push"
```
---
<!-- .slide: data-background="images/reactions/tumblr_mnj888Jab71s6z99jo1_500.gif" data-state="inverted" -->

<br><br><br><br>
<br><br><br><br>
<br><br>
# Profit!
---
<!-- .slide: data-background="images/backgrounds/8207553734_1cacc702f3_o.jpg" data-state="inverted faded" -->

<br><br><br><br><br><br>
## Thank you!

* Slides: [http://schepp.github.io/HTTP-2](http://schepp.github.io/HTTP-2)
* Twitter: [@derSchepp](https://twitter.com/derSchepp)
* Podcast: [Working Draft](http://workingdraft.de)

---
# Further literature

* [HTTP/2 Frequently Asked Questions](http://http2.github.io/faq/)
* [High Performance Networking](http://chimera.labs.oreilly.com/books/1230000000545/ch12.html#HTTP2_UPGRADE)
* [Making The Web Faster With SPDY](http://blog.teamtreehouse.com/making-the-web-faster-with-spdy)
* [SPDYCheck.org](http://spdycheck.org/)
* [Evaluating the Performance of SPDY-enabled Web Servers](http://www.neotys.com/blog/performance-of-spdy-enabled-web-servers/)
---
## Picture Credits

<ul class="multicolumn">

<li>Golden abstract science fiction: Shutterstock - pixelparticle
<li>Sonnenuntergang: Shutterstock - Natalia Dobryanskaya
<li>Soviet: Shutterstock -  Triff
<li>Tim Berners Lee: Wikipedia
<li>Code Matrix: Shutterstock - Sebastian Kaulitzki
<li>Frau mit Laptop: Shutterstock - Voyagerix
<li>Cables: Shutterstock - Eugene Sergeev
<li>Deutschlandkarte: DeStatis, David Liuzzo
<li>Hubschrauber: usmilitaryhelicopters.org
<li>Cloud Computing Concept: Shutterstock - olegganko
<li>shiny space, futuristic wave: Shutterstock - majcot
<li>Prism: Shutterstock - mejnak
<li>Grass: Shutterstock - noppharat
<li>Engine start stop button: Shutterstock - Peter Gudella
<li>Planet Facebook or Planet Earth? - Paul Butler
<li>Walt Disney Concert Hall - Graham@Flickr
<li>Schnappschuss: Stefan Nitzsche
<li>Animierte GIFs: devopsreactions.tumblr.com & gifsoup.com

</ul>