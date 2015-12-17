// Add snowplow snippet
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://d1uxm17u44dmmr.cloudfront.net/2.2.1/sp.js","snowplow"));

if (window.__asml && window.__asml.length > 0) {
  var queueName = window.__asml.shift();
  var queue = window[queueName];

  for (var i = 0; i < queue.q.length; i++) {
    var command = queue.q[i];
    if (command[0] == 'create') {
      window.snowplow('newTracker', 'cf', 'd2foz27wkg37mr.cloudfront.net', {
        appId: command[1]
      });
    } else if (command[0] == 'track') {
      if (command[1]) {
        window.snowplow('setUserId', command[1])
      }
      window.snowplow('trackPageView')
    } else {
      window.snowplow.apply(window.snowplow, command)
    }
  }
}
