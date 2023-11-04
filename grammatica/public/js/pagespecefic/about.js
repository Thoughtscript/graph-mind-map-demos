$(document).ready(function(){

	$('text').click(function(e){
		e.preventDefault();

		if ($(this).text() == 'opensource') {
			window.open("https://github.com/Thoughtscript/demo_grammatica_informatica",'_blank');
			window.open('opensource.html','_blank');
		}

		if ($(this).text() == 'career') {
			window.open('https://github.com/Thoughtscript/wp_postlib_job_codex/blob/master/batch/job_codex.bat', '_blank');
			window.open('intellection.html','_blank');
		}

		if ($(this).text() == 'ideator') {
			window.open('intellection.html','_blank');
			window.open('culture.html','_blank');
		}

		if ($(this).text() == 'beginner') {
			window.open('frontend.html','_blank');
			window.open('backend.html','_blank');
			window.open('stack.html','_blank');
			window.open('lingo.html','_blank');
			window.open('mobile.html','_blank');
			window.open('infrastructure.html','_blank');
		}

		if ($(this).text() == 'experienced') {
			window.open('frontend.html','_blank');
			window.open('backend.html','_blank');
			window.open('stack.html','_blank');
			window.open('lingo.html','_blank');
			window.open('mobile.html','_blank');
			window.open('infrastructure.html','_blank');
			window.open('opensource.html','_blank');
		}	

		if ($(this).text() == 'business') {
			window.open('lingo.html','_blank');
			window.open('intellection.html','_blank');
		}
	})
})

    var flaredata = [{
    "name": "flare.experienced",
        "size": 3812,
        "imports": ["flare.beginner",
        "flare.ideator",
]} , {
    "name": "flare.business",
        "size": 3812,
        "imports": ["flare.experienced",
        "flare.ideator",
]} , {
    "name": "flare.ideator",
        "size": 3812,
        "imports": ["flare.business",
]} , {
    "name": "flare.beginner",
        "size": 3812,
        "imports": ["flare.experienced",
]}  , {
    "name": "flare.career",
        "size": 3812,
        "imports": ["flare.business",
        "flare.ideator"
]} , {
    "name": "flare.opensource",
        "size": 3812,
        "imports": ["flare.business",
        "flare.ideator"
]}];

var diameter = 900,
    radius = diameter / 2,
    innerRadius = radius - 180,
    m0,
    pi = Math.PI,
    cluster = d3.layout.cluster()
    .size([360, innerRadius])
    .sort(null)
    .value(function (d) {
    return d.size;
}), bundle = d3.layout.bundle(),
 line = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(.85)
    .radius(function (d) {
    return d.y;
}).angle(function (d) {
    return d.x / 180 * Math.PI;
});

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");


//d3.json(flaredata, function(error, classes) {
var nodes = cluster.nodes(packageHierarchy(flaredata)),
    links = packageImports(nodes);

var unique_links = links.reduce(function (p, c) {
    var index = p.map(function (d, i) {
        if (d.source === c.target && d.target === c.source) return i;
    }).filter(function (e, i, a) {
        return e != undefined;
    }).shift();
    if (!isNaN(index)) p[index].both = true;
    else p.push(c);
    return p;
}, []);

link = link.data(bundle(unique_links))
    .enter().append("path")
    .each(function (d) {
    d.source = d[0],
    d.target = d[d.length - 1],
    d.both = unique_links.filter(function (v) {
        if (v.source === d.source && v.target === d.target) return v.both;
    }).shift();
})
    .attr("class", "link")
    .attr("d", line);

node = node.data(nodes.filter(function (n) {
    return !n.children;
}))
    .enter().append("text")
    .attr("class", "node")
    .attr("dy", ".31em")
    .attr("transform", function (d) {
    return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)");
})
    .style("text-anchor", function (d) {
    return d.x < 180 ? "start" : "end";
})
    .text(function (d) {
    return d.key;
})
    .on("mouseover", mouseovered)
    .on("mouseout", mouseouted);
//});
function tipshow(d) {
    d3.select(this).append("text")
        .attr("class", "mousedown")
        .attr('transform', function (d) {
        return 'translate(5, -10)';
    })
        .text(d.citation);
}

function mouseovered(d) {
    node.each(function (n) {
        n.target = n.source = false;
    });

    link.classed("link--both", function (l) {
        if ((l.target === d || l.source === d) && l.both) return l.source.source = l.source.target = l.target.source = l.target.target = true;
    })
        .classed("link--target", function (l) {
        if (l.target === d && !l.both) return l.source.source = true;
    })
        .classed("link--source", function (l) {
        if (l.source === d && !l.both) return l.target.target = true;
    })
        .filter(function (l) {
        return l.target === d || l.source === d;
    })
        .each(function () {
        this.parentNode.appendChild(this);
    });

    node.classed("node--both", function (n) {
        return n.source && n.target;
    })
        .classed("node--target", function (n) {
        return n.target;
    })
        .classed("node--source", function (n) {
        return n.source;
    });
}

function mouseouted(d) {
    link.classed("link--both", false)
        .classed("link--target", false)
        .classed("link--source", false);

    node.classed("node--both", false)
        .classed("node--target", false)
        .classed("node--source", false);
}

d3.select(self.frameElement).style("height", diameter + "px");

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
    var map = {};

    function find(name, data) {
        var node = map[name],
            i;
        if (!node) {
            node = map[name] = data || {
                name: name,
                children: []
            };
            if (name.length) {
                node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                node.parent.children.push(node);
                node.key = name.substring(i + 1);
            }
        }
        return node;
    }

    classes.forEach(function (d) {
        find(d.name, d);
    });

    return map[""];
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
    var map = {},
    imports = [];

    // Compute a map from name to node.
    nodes.forEach(function (d) {
        map[d.name] = d;
    });

    // For each import, construct a link from the source to target node.
    nodes.forEach(function (d) {
        if (d.imports) d.imports.forEach(function (i) {
            imports.push({
                source: map[d.name],
                target: map[i]
            });
        });
    });

    return imports;
}