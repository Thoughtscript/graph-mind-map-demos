var root = {"name":"mobile","size":200,"children":[{"name":"android sdk","size":200,"url":"https://developer.android.com/sdk/index.html"},{"name":"ios","size":200,"url":"https://developer.apple.com/xcode/"},{"name":"cross-platform","size":200,"children":[{"name":"buildfire","size":200,"url":"http://buildfire.com/"},{"name":"corona","size":200,"url":"https://coronalabs.com/"},{"name":"phonegap","size":200,"url":"http://phonegap.com/"},{"name":"appcelerator","size":200,"url":"http://www.appcelerator.com/"}]}]};

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