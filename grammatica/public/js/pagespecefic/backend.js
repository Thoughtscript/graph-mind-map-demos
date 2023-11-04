
var root = {"name":"Back End","children":[{"name":"Application Servers","size":200,"children":[{"name":"Apache Tomcat","size":200,"url":"http://tomcat.apache.org/"},{"name":"JBoss","size":200,"url":"http://www.jboss.org/"}]},{"name":"ruby","size":200,"children":[{"name":"ruby sdk","size":200,"url":"https://www.ruby-lang.org/en/"},{"name":"ruby ide","size":200,"url":"http://www.aptana.com/products/studio3/download.html"},{"name":"frameworks","size":200,"children":[{"name":"ruby on rails","size":200,"url":"http://rubyonrails.org/"},{"name":"slim","size":200,"url":"http://slim-lang.com/"}]}]},{"name":"node.js","size":200,"children":[{"name":"node.js","size":200,"url":"https://nodejs.org/en/"},{"name":"express","size":200,"url":"http://expressjs.com/"},{"name":"socket.io","size":200,"url":"http://socket.io/"},{"name":"mongoose","size":200,"url":"http://mongoosejs.com/"}]},{"name":"PHP","size":200,"children":[{"name":"Install PHP","size":200,"url":"http://php.net/downloads.php"},{"name":"W3Schools","size":200,"url":"http://www.w3schools.com/php/default.asp"},{"name":"netbeans","size":200,"url":"https://netbeans.org/downloads/"},{"name":"Frameworks","size":200,"children":[{"name":"Cake 3","size":200,"url":"http://cakephp.org/"},{"name":"Laravel","size":200,"url":"http://laravel.com/"}]}]},{"name":"JSON","size":200,"children":[{"name":"JSONFormatter and Validator","size":200,"url":"https://jsonformatter.curiousconcept.com/"}]},{"name":"Portfolio","size":200,"children":[{"name":"GitHub","size":200,"url":"https://github.com/"}]},{"name":".NET","size":200,"children":[{"name":".NET Framework","size":200,"url":"https://msdn.microsoft.com/en-us/vstudio/aa496123.aspx"},{"name":"unity3d","size":200,"url":"https://unity3d.com/"},{"name":"IDE's","size":200,"children":[{"name":"Visual Studio","size":200,"url":"https://www.visualstudio.com/en-us/visual-studio-homepage-vs.aspx"},{"name":"Sharp IDE","size":200,"url":"http://sourceforge.net/projects/sharpdevelop/"}]}]},{"name":"Java","size":200,"children":[{"name":"Java JRE and JDK","size":200,"url":"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},{"name":"JDK Installation Guide","size":200,"url":"http://docs.oracle.com/javase/7/docs/webnotes/install/windows/jdk-installation-windows.html"},{"name":"Groovy","size":200,"url":"http://www.groovy-lang.org/"},{"name":"Java Decompiler","size":200,"url":"http://jd.benow.ca/"},{"name":"Frameworks","size":200,"children":[{"name":"Spring","size":200,"url":"https://spring.io/"},{"name":"Hibernate","size":200,"url":"http://hibernate.org/"},{"name":"Wicket","size":200,"url":"http://wicket.apache.org/"}]},{"name":"IDE's","size":200,"children":[{"name":"STS","size":200,"url":"http://spring.io/tools"},{"name":"NetBeans","size":200,"url":"https://netbeans.org/"},{"name":"Eclipse","size":200,"url":"https://eclipse.org/downloads/"},{"name":"IntelliJ","size":200,"url":"https://www.jetbrains.com/idea/"}]},{"name":"API's","size":200,"children":[{"name":"Quartz","size":200,"url":"http://quartz-scheduler.org/"},{"name":"GoogleSimpleCSV","size":200,"url":"https://code.google.com/p/jcsv/"}]},{"name":"EXEWrapper's","size":200,"children":[{"name":"jsmooth","size":200,"children":[{"name":"jsmoth","size":200,"url":"http://jsmooth.sourceforge.net/"},{"name":"jsmoothguide","size":200,"url":"http://dirtyhandsphp.blogspot.com/2012/02/java-convert-jar-file-into-exe-file-in.html"}]},{"name":"launch4j","size":200,"children":[{"name":"launch4j","size":200,"url":"http://launch4j.sourceforge.net/"},{"name":"launch4jguide","size":200,"url":"http://techwayz.com/convert-jar-to-exe-launch4j/"}]},{"name":"Quartz","size":200,"url":"http://quartz-scheduler.org/"},{"name":"GoogleSimpleCSV","size":200,"url":"https://code.google.com/p/jcsv/"}]},{"name":"BuildTools","size":200,"children":[{"name":"Maven","size":200,"children":[{"name":"Maven","size":200,"url":"http://maven.apache.org/"},{"name":"InstallMaven","size":200,"url":"http://www.mkyong.com/maven/how-to-install-maven-in-windows/"},{"name":"MavenRepository","size":200,"url":"http://mvnrepository.com/"}]},{"name":"Ant","size":200,"children":[{"name":"Ant","size":200,"url":"http://ant.apache.org/"},{"name":"InstallAnt","size":200,"url":"http://ant.apache.org/manual/install.html"}]},{"name":"Gradle","size":200,"children":[{"name":"Gradle","size":200,"url":"http://gradle.org/"}]}]},{"name":"UnitTesting","size":200,"children":[{"name":"JUnit","size":200,"url":"http://junit.org/"}]}]}]};

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