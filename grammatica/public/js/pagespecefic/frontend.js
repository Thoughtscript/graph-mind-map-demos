var root = {"name":"front end","size":200,"children":[{"name":"javascript","size":200,"children":[{"name":"jsbeautifier","size":200,"url":"http://jsbeautifier.org/"},{"name":"libs","size":200,"children":[{"name":"jquery","size":200,"url":"https://jquery.com/"},{"name":"device","size":200,"url":"http://devicejs.org/"},{"name":"react","size":200,"url":"https://facebook.github.io/react/"},{"name":"angular","size":200,"url":"https://angularjs.org/"},{"name":"backbone","size":200,"url":"http://backbonejs.org/"},{"name":"handlebars","size":200,"url":"http: //handlebarsjs.com/"},{"name":"visualization","size":200,"children":[{"name":"d3","size":200,"url":"http://d3js.org/"},{"name":"arbor","size":200,"url":"http://arborjs.org/"}]},{"name":"node","size":200,"children":[{"name":"node","size":200,"url":"https://nodejs.org/en/"},{"name":"ember","size":200,"url":"http://emberjs.com/"},{"name":"jade","size":200,"children":[{"name":"jade","size":200,"url":"http://jade-lang.com/"},{"name":"htmltojade","size":200,"url":"http://naltatis.github.io/jade-syntax-docs/"}]}]}]}]},{"name":"python","size":200,"children":[{"name":"python","size":200,"url":"https://www.python.org/"},{"name":"frameworks","size":200,"children":[{"name":"django","size":200,"url":"https://www.djangoproject.com/"}]}]},{"name":".NET","size":200,"children":[{"name":"asp.net","size":200,"url":"http://www.asp.net/"},{"name":"IDE's","size":200,"children":[{"name":"Visual Studio","size":200,"url":"https://www.visualstudio.com/en-us/visual-studio-homepage-vs.aspx"},{"name":"Sharp IDE","size":200,"url":"http://sourceforge.net/projects/sharpdevelop/"}]}]},{"name":"css","size":200,"children":[{"name":"css3","size":200,"children":[{"name":"w3schools","size":200,"url":"http://www.w3schools.com/css/default.asp"},{"name":"fontawesome","size":200,"url":"https://fortawesome.github.io/Font-Awesome/"},{"name":"firefoxextensions","size":200,"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Mozilla_Extensions"},{"name":"webkitextensions","size":200,"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Webkit_Extensions"},{"name":"mediaqueries","size":200,"url":"https://css-tricks.com/snippets/css/media-queries-for-standard-devices/"}]},{"name":"css4","size":200,"url":"http: //css4-selectors.com/"},{"name":"compiled","size":200,"children":[{"name":"less.js","size":200,"url":"http://lesscss.org/"},{"name":"scss","size":200,"url":"http://sass-lang.com/"}]}]},{"name":"portfolio","size":200,"children":[{"name":"codepen","size":200,"url":"http://codepen.io/"}]},{"name":"analytics","size":200,"children":[{"name":"googleanalytics","size":200,"url":"http://www.google.com/analytics/"}]},{"name":"quick","size":200,"children":[{"name":"squarespace","size":200,"url":"http://www.squarespace.com/"}]},{"name":"addsite","size":200,"children":[{"name":"indexongoogle","size":200,"url":"https://support.google.com/webmasters/answer/6259634?hl=en"}]},{"name":"ide's","size":200,"children":[{"name":"sublimetext","size":200,"children":[{"name":"ide","size":200,"url":"http://www.sublimetext.com/"},{"name":"packagecontrol","size":200,"url":"https://packagecontrol.io/"}]},{"name":"atom","size":200,"url":"https://atom.io/"},{"name":"komodo","size":200,"url":"http://komodoide.com/"}]},{"name":"html5","size":200,"children":[{"name":"w3schools","size":200,"url":"http://www.w3schools.com/html/default.asp"},{"name":"html6","size":200,"url":"http://html6spec.com/"},{"name":"htmlcompression","size":200,"url":"http://www.textfixer.com/html/compress-html-compression.php"},{"name":"escapehtmltodisplay","size":200,"url":"http://www.plus2net.com/html_tutorial/tags-page.php"},{"name":"htmlbeautify","size":200,"url":"http://www.cleancss.com/html-beautify/"},{"name":"frameworks","size":200,"children":[{"name":"bootstrap","size":200,"url":"http://getbootstrap.com/"},{"name":"boilerplate","size":200,"url":"https://html5boilerplate.com/"}]}]}]};

var diameter = 1150;

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 80])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter )
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  var nodes = tree.nodes(root),
      links = tree.links(nodes);

  var link = svg.selectAll(".link")
      .data(links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", diagonal);

  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

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
      .attr("dy", ".31em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
      .text(function(d) { return d.name; });


d3.select(self.frameElement).style("height", diameter - 150 + "px");