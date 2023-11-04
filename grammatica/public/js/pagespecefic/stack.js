
var root = {"name":"fullstack","size":200,"children":[{"name":"lamp","size":200,"children":[{"name":"wamp","size":200,"url":"http://www.wampserver.com/en/"},{"name":"drupal","size":200,"children":[{"name":"install","size":200,"url":"https://www.drupal.org/"},{"name":"documentation","size":200,"url":"https://www.drupal.org/documentation/install"}]},{"name":"wordpress","size":200,"children":[{"name":"install","size":200,"url":"https://wordpress.org/"},{"name":"documentation","size":200,"url":"https://codex.wordpress.org/Main_Page"},{"name":"envato","size":200,"url":"http://market.envato.com/"},{"name":"creativemarket","size":200,"url":"https://creativemarket.com/"}]},{"name":"joomla","size":200,"url":"https://www.joomla.org/"}]},{"name":"mean","size":200,"url":"http://mean.io/#!/"},{"name":"typical java","size":200,"children":[{"name":"jdk","size":200,"url":"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},{"name":"spring","size":200,"url":"https://spring.io/"},{"name":"hibernate","size":200,"url":"http://hibernate.org/"},{"name":"sql","size":200,"url":"http://www.microsoft.com/en-us/server-cloud/products/sql-server-2016/"}]}]};

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