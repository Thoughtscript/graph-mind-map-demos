var root = {"name":"infrastructure","size":200,"children":[{"name":"database","size":200,"children":[{"name":"mongodb","size":200,"url":"https://www.mongodb.org/"},{"name":"mysql","size":200,"url":"https://www.mysql.com/"},{"name":"sql","size":200,"children":[{"name":"sqlserver2016","size":200,"url":"http://www.microsoft.com/en-us/server-cloud/products/sql-server-2016/"},{"name":"repair orphaned dbo's","size":200,"url":"http://dbadiaries.com/using-sp_change_users_login-to-fix-sql-server-orphaned-users"},{"name":"w3schools","size":200,"url":"http://www.w3schools.com/sql/"}]}]},{"name":"web hosting and domains","size":200,"children":[{"name":"general","size":200,"children":[{"name":"domain.com","size":200,"url":"http://www.domain.com/"},{"name":"godaddy","size":200,"url":"https://www.godaddy.com/"},{"name":"hostgater","size":200,"url":"http://www.hostgator.com/"},{"name":"hostmonster","size":200,"url":"https://www.hostmonster.com/"},{"name":"a2 hosting","size":200,"url":"http://svsrev.net/a2hosting"}]},{"name":"lampspecefic","size":200,"children":[{"name":"pantheon","size":200,"url":"https://pantheon.io/"}]},{"name":"mongospecefic","size":200,"children":[{"name":"mongolab","size":200,"url":"https://mongolab.com/"},{"name":"compose","size":200,"url":"https://app.compose.io/"}]},{"name":"nodejs","size":200,"children":[{"name":"openshift","size":200,"url":"https://www.openshift.com/"},{"name":"heroku","size":200,"url":"https://www.heroku.com/"}]}]},{"name":"ftp","size":200,"children":[{"name":"coreftp","size":200,"url":"http://www.coreftp.com/"},{"name":"filezilla","size":200,"url":"https://filezilla-project.org/"}]},{"name":"cloud","size":200,"children":[{"name":"rackspace","size":200,"url":"http://www.rackspace.com/"},{"name":"amazonaws","size":200,"url":"https://aws.amazon.com/"}]},{"name":"filesharing","size":200,"children":[{"name":"box","size":200,"url":"https://www.box.com/home/b/"},{"name":"dropbox","size":200,"url":"https://www.dropbox.com/en/"}]},{"name":"os and terminal","size":200,"children":[{"name":"virtualization","size":200,"children":[{"name":"vbox","size":200,"url":"https://www.virtualbox.org/"}]},{"name":"linux terminal","size":200,"children":[{"name":"cygwin","size":200,"url":"https://www.cygwin.com/"}]},{"name":"get os","size":200,"children":[{"name":"windows oem","size":200,"url":"http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=windows+OEM&N=-1&isNodeId=1"},{"name":"redhat","size":200,"url":"http://www.redhat.com/en"},{"name":"ubuntu","size":200,"url":"http://www.ubuntu.com/"}]}]},{"name":"teh internets","size":200,"children":[{"name":"wireshark","size":200,"url":"https://www.wireshark.org/"},{"name":"old ie versions","size":200,"url":"https://dev.modern.ie/tools/vms/windows/"},{"name":"openssl","size":200,"url":"http://slproweb.com/products/Win32OpenSSL.html/"}]},{"name":"payment","size":200,"children":[{"name":"braintree","size":200,"url":"https://www.braintreepayments.com/"}]},{"name":"dist and repo","size":200,"children":[{"name":"docker","size":200,"url":"https://www.docker.com/"},{"name":"repos","size":200,"children":[{"name":"github","size":200,"url":"https://github.com/"},{"name":"git","size":200,"url":"https://git-scm.com/"},{"name":"svn","size":200,"children":[{"name":"subversion","size":200,"url":"https://subversion.apache.org/"},{"name":"tortoisesvn","size":200,"url":"http://tortoisesvn.net/"}]}]}]},{"name":"learning","size":200,"children":[{"name":"stackoverflow","size":200,"url":"http://stackoverflow.com/"}]},{"name":"business","size":200,"children":[{"name":"crm","size":200,"children":[{"name":"salesforce","size":200,"url":"http://stackoverflow.com/"}]},{"name":"methodology","size":200,"children":[{"name":"agile","size":200,"url":"http://agilemethodology.org/"},{"name":"waterfall","size":200,"url":"http://www.waterfall-model.com/"}]},{"name":"stackrevelation","size":200,"children":[{"name":"stackshare","size":200,"url":"http://stackshare.io/"}]}]}]};

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