var root = {"name":"culture","size":200,"children":[{"name":"deep think","size":200,"children":[{"name":"future of humanity institute","size":200,"url":"http://www.fhi.ox.ac.uk/"},{"name":"foundational questions institute","size":200,"url":"http://fqxi.org/"},{"name":"humanity+","size":200,"url":"http://humanityplus.org/"},{"name":"rsaanimate","size":200,"url":"http://www.thersa.org/events/rsaanimate"},{"name":"edge.org","size":200,"url":"http://edge.org/"},{"name":"ted","size":200,"url":"https://www.ted.com/talks"},{"name":"csli","size":200,"url":"https://www-csli.stanford.edu/"},{"name":"arxiv","size":200,"url":"http://arxiv.org/"}]},{"name":"news/policy","size":200,"children":[{"name":"bbc","size":200,"url":"http://www.bbc.com/"},{"name":"al jazeera","size":200,"url":"http://www.aljazeera.com/"},{"name":"cnn","size":200,"url":"http://www.cnn.com/"},{"name":"the economist","size":200,"url":"http://www.economist.com/"},{"name":"mises institute","size":200,"url":"https://mises.org/"},{"name":"foreign policy","size":200,"url":"http://foreignpolicy.com/"},{"name":"wall street journal","size":200,"url":"http://www.wsj.com/"},{"name":"forbes","size":200,"url":"http://www.forbes.com/"},{"name":"guardian","size":200,"url":"http://www.theguardian.com/us"}]},{"name":"philosophy","size":200,"children":[{"name":"philosophy talk","size":200,"url":"http://www.philosophytalk.org/"},{"name":"sep","size":200,"url":"http://plato.stanford.edu/"}]},{"name":"culture","size":200,"children":[{"name":"reason","size":200,"url":"https://reason.com/"},{"name":"nautilus","size":200,"url":"http://nautil.us/"},{"name":"salon","size":200,"url":"http://www.salon.com/"},{"name":"new yorker","size":200,"url":"http://www.newyorker.com/"},{"name":"slate","size":200,"url":"http://www.slate.com"},{"name":"vice","size":200,"url":"http://www.vice.com/en_us"},{"name":"wired","size":200,"url":"http://www.wired.com/"}]},{"name":"humor","size":200,"children":[{"name":"xkcd","size":200,"url":"http://xkcd.com/"},{"name":"first dates with toby harris","size":200,"url":"https://screen.yahoo.com/first-dates-with-toby-harris/"}]},{"name":"poetry","size":200,"children":[{"name":"leveler","size":200,"url":"http://www.levelerpoetry.com "},{"name":"anderbo","size":200,"url":"http://www.anderbo.com/"},{"name":"missouri review","size":200,"url":"http://www.missourireview.com/ "},{"name":"poets&writers","size":200,"url":"http://www.pw.org/"},{"name":"ewr","size":200,"url":"http://www.everywritersresource.com/"}]},{"name":"music","size":200,"children":[{"name":"la blogotheque","size":200,"url":"http://www.blogotheque.net/ "},{"name":"pitchfork","size":200,"url":"http://pitchfork.com/"},{"name":"daytrotter","size":200,"url":"http://www.daytrotter.com/ "}]},{"name":"video","size":200,"children":[{"name":"vimeo","size":200,"url":"https://vimeo.com/ "},{"name":"wanderers","size":200,"url":"https://vimeo.com/108650530"},{"name":"the gift","size":200,"url":"https://vimeo.com/33025640"}]}]};

var margin = {top: 20, right: 120, bottom: 20, left: 120},
width = 960 - margin.right - margin.left,
height = 800 - margin.top - margin.bottom;

var i = 0,
duration = 750;

var tree = d3.layout.tree()
.size([height, width]);

var diagonal = d3.svg.diagonal()
.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
.attr("width", width + margin.right + margin.left)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root.x0 = height / 2;
root.y0 = 0;

function collapse(d) {
if (d.children) {
  d._children = d.children;
  d._children.forEach(collapse);
  d.children = null;
}
}

root.children.forEach(collapse);
update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {

var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

nodes.forEach(function(d) { d.y = d.depth * 180; });

var node = svg.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });

var nodeEnter = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
  .on("click", click);

nodeEnter.append("circle")
  .attr("r", 1e-6)
  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
  .on("mouseover", function (d) {
	  	if (d.url) {
	    	d3.select(this.parentNode).select("text").style("fill", "orange");
		};
}).on("mouseout", function (d) {
    d3.select(this.parentNode).select("text").style("fill", "#6600CC");
})

nodeEnter.append("text")
  .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
  .attr("dy", ".35em")
  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1e-6);

var nodeUpdate = node.transition()
  .duration(duration)
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

nodeUpdate.select("circle")
  .attr("r", 4.5)
  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

nodeUpdate.select("text")
  .style("fill-opacity", 1);

var nodeExit = node.exit().transition()
  .duration(duration)
  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
  .remove();

nodeExit.select("circle")
  .attr("r", 1e-6);

nodeExit.select("text")
  .style("fill-opacity", 1e-6);

var link = svg.selectAll("path.link")
  .data(links, function(d) { return d.target.id; });

link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
  });

link.transition()
  .duration(duration)
  .attr("d", diagonal);

link.exit().transition()
  .duration(duration)
  .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
  })
  .remove();

nodes.forEach(function(d) {
d.x0 = d.x;
d.y0 = d.y;
});
}

function click(d) {
if (d.url) {
   var win = window.open(d.url, '_blank');
   win.focus();
} else {
if (d.children) {
d._children = d.children;
d.children = null;
} else {
d.children = d._children;
d._children = null;
}
update(d);
}
}
