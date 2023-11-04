var root = {"name":"do the needful","size":200,"children":[{"name":"presentations","size":200,"children":[{"name":"prezi","size":200,"url":"https://prezi.com/"}]},{"name":"pdf","size":200,"children":[{"name":"adobe reader","size":200,"url":"https://get.adobe.com/reader/"},{"name":"pdfreactor","size":200,"url":"http://www.pdfreactor.com/"}]},{"name":"text & logging","size":200,"children":[{"name":"notepad++","size":200,"url":"https://notepad-plus-plus.org/"},{"name":"baretail","size":200,"url":"http://baretail.soft112.com/"}]},{"name":"archiving","size":200,"children":[{"name":"winrar","size":200,"url":"http://www.rarlab.com/download.htm"},{"name":"7zip","size":200,"url":"http://www.7-zip.org/"}]},{"name":"anti-virus","size":200,"children":[{"name":"avast!","size":200,"url":"https://www.avast.com/en-us/index"}]},{"name":"backup","size":200,"children":[{"name":"backup","size":200,"url":"http://www.2brightsparks.com/syncback/syncback-hub.html"}]},{"name":"download website","size":200,"children":[{"name":"httrack","size":200,"url":"https://www.httrack.com/"}]},{"name":"download .flv","size":200,"children":[{"name":"ant video","size":200,"url":"http://www.ant.com/video-downloader/"}]},{"name":"video player","size":200,"children":[{"name":"vlc","size":200,"url":"http://www.videolan.org/vlc/index.html"}]},{"name":"browsers","size":200,"children":[{"name":"firefox","size":200,"url":"https://www.mozilla.org/en-US/firefox/new/"},{"name":"chrome","size":200,"url":"http://www.google.com/chrome/"},{"name":"safari","size":200,"children":[{"name":"osx","size":200,"url":"http://www.apple.com/safari/"},{"name":"windows","size":200,"url":"http://www.techspot.com/downloads/4184-safari-for-windows.html"}]},{"name":"opera","size":200,"url":"http://www.opera.com/"},{"name":"ie","size":200,"children":[{"name":"11","size":200,"url":"http://windows.microsoft.com/en-us/internet-explorer/download-ie"},{"name":"older","size":200,"url":"https://dev.modern.ie/tools/vms/windows/"}]}]}]};

var width = 500,
height = 500;
var cluster = d3.layout.cluster()
.size([height, width - 300]);
var diagonal = d3.svg.diagonal()
.projection(function(d) { return [d.y, d.x]; });
var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(120,0)");

var nodes = cluster.nodes(root),
  links = cluster.links(nodes);
var link = svg.selectAll(".link")
  .data(links)
.enter().append("path")
  .attr("class", "link")
  .attr("d", diagonal);
var node = svg.selectAll(".node")
  .data(nodes)
.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
node.append("circle")
  .attr("r", 4.5).on("mouseover", function (d) {
	  if (d.url) {
	    d3.select(this.parentNode).select("text").style("fill", "orange");
	  };
  }).on("mouseout", function (d) {
      d3.select(this.parentNode).select("text").style("fill", "#6600CC");
  }).on("click", function (d) {
      if (d.url) {
          var win = window.open(d.url, '_blank');
          win.focus();
      }
  });
node.append("text")
  .attr("dx", function(d) { return d.children ? -8 : 8; })
  .attr("dy", 3)
  .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
  .text(function(d) { return d.name; });

d3.select(self.frameElement).style("height", height + "px");
