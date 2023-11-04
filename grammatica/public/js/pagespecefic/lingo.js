var flaredata = [{
    "name": "flare.mvcpattern",
        "citation": "An implementation pattern utilizing the concepts of models, views, and controllers.",
        "size": 3812,
        "imports": ["flare.model",
        	"flare.view",
        	"flare.controller",
        	"flare.domainlayer"]
}, {
    "name": "flare.model",
        "citation": "The data to be displayed (and how it’s organized, as well as structured after getting picked up from the database or other sources) in the view or handled by logic routed by the controller.",
        "size": 3812,
        "imports": ["flare.mvcpattern",
        	"flare.controller",
        	"flare.domainlayer",
        	"flare.datalayer",
        	"flare.orm"]
}, {
    "name": "flare.view",
        "citation": "What gets displayed (to the user, etc.).",
        "size": 3812,
        "imports": ["flare.mvcpattern",
        	"flare.controller",
        	"flare.domainlayer",
        	"flare.ui"]
}, {
    "name": "flare.controller",
        "citation": "Determines what gets displayed and what logic is executed based on request or specified need.",
        "size": 3812,
        "imports": ["flare.mvcpattern",
        	"flare.view",
        	"flare.model"]
}, {
    "name": "flare.servicelayerarchitecture",
        "citation": "The seperation of a web application into areas of concern.",
        "size": 3812,
        "imports": ["flare.domainlayer",
        	"flare.datalayer",
        	"flare.servicelayer",
        	"flare.ui",
        	"flare.webapplication"]
}, {
    "name": "flare.domainlayer",
        "citation": "Structures and organizes data layer information into information usable by service layer. Contains non-persisted data (data that has not been sent to database) using models. Service layer logic operates on domain entities and persisted intelligently (as need be only) to data layer using ORM.",
        "size": 3812,
        "imports": ["flare.model",
        "flare.orm"]
}, {
    "name": "flare.servicelayer",
        "citation": "The business logic of the web application",
        "size": 3812,
        "imports": ["flare.servicelayerarchitecture"]
}, {
    "name": "flare.ui",
        "citation": "What the user manipulates through their client. The view.",
        "size": 3812,
        "imports": ["flare.view"]
}, {
    "name": "flare.servicelayer",
        "citation": "The business logic of the web application",
        "size": 3812,
        "imports": ["flare.servicelayerarchitecture"]
}, {
    "name": "flare.frontend",
        "citation": "Code, logic, and operations executed on/in a web client (user’s browser).",
        "size": 3812,
        "imports": ["flare.webapplication"]
}, {
    "name": "flare.backend",
        "citation": "Code, logic, and operations executed on the web server.",
        "size": 3812,
        "imports": ["flare.webapplication"]
}, {
    "name": "flare.orm",
        "citation": "Object relational mapping. Maps entities in the datalayer to domain entities in the domain layer.",
        "size": 3812,
        "imports": ["flare.domainlayer",
        	"flare.model",
        	"flare.datalayer"]
}, {
    "name": "flare.versioncontrolsystem",
        "citation": "A tool used to manage code changes made by one or more developers.",
        "size": 3812,
        "imports": ["flare.coderepository"]
}, {
    "name": "flare.datalayer",
        "citation": "Source of data and information. The “heart and soul” of the application. Often a database or databases.",
        "size": 3812,
        "imports": ["flare.domainlayer",
        	"flare.model",
             "flare.orm"]
}, {
    "name": "flare.ipaddress",
        "citation": "Numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication.",
        "size": 3812,
        "imports": []
}, {
    "name": "flare.techstack",
        "citation": "The primary or primary programming languages and other technologies connected to a database that comprise a web application or that enable it to run.",
        "size": 3812,
        "imports": ["flare.webapplication"]
}, {
    "name": "flare.rest",
        "citation": "A web service communication protocol utilizing JSON to transmit and package data between HTTP(s) endpoints.",
        "size": 3812,
        "imports": ["flare.wscp"]
}, {
    "name": "flare.soap",
        "citation": "A web service communication protocol utilizing XML to transmit and package data between endpoints",
        "size": 3812,
        "imports": ["flare.wscp"]
}, {
    "name": "flare.applicationserver",
        "citation": "A server on which a web application runs. Users make requests to the server – the server responds by serving the correct web page using models, views, and controllers.",
        "size": 3812,
        "imports": ["flare.webapplication",
        "flare.server"]
}, {
    "name": "flare.server",
        "citation": "A computer program or a machine that waits for requests from other machines or software (clients) and responds to them.",
        "size": 3812,
        "imports": []
}, {
    "name": "flare.saas",
        "citation": "Software as a service. Where a web application is hosted locally and licensed to clients and users.",
        "size": 3812,
        "imports": ["flare.webapplication"]
}, {
    "name": "flare.coderepository",
        "citation": "A place where code is stored. Often integrated with a version control system.",
        "size": 3812,
        "imports": ["flare.versioncontrolsystem"]
}, {
    "name": "flare.cloud",
        "citation": "Services or applications hosted on third-party servers.",
        "size": 3812,
        "imports": ["flare.server"]
}, {
    "name": "flare.webapplication",
        "citation": "A client-server software application in which the client (or user interface) runs in a web browser.",
        "size": 3812,
        "imports": ["flare.applicationserver",
        	"flare.techstack",
        	"flare.servicelayerarchitecture"]
}, {
    "name": "flare.dns",
        "citation": "Domain Name Service. Associates human-readable URL addresses with IP addresses.",
        "size": 3812,
        "imports": ["flare.ipaddress"]
}, {
    "name": "flare.wscp",
        "citation": "Web Service Communication Protocol. A standard for transmitting data between web services.",
        "size": 3812,
        "imports": ["flare.soap",
                "flare.rest"]
}
];

var diameter = 900,
    radius = diameter / 2,
    innerRadius = radius - 180,
    m0,
    pi = Math.PI;

var cluster = d3.layout.cluster()
    .size([360, innerRadius])
    .sort(null)
    .value(function (d) {
    return d.size;
});

var bundle = d3.layout.bundle();

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .style("z-index", "10")
    .html(function (d) {
    return "<span style='color:grey'>" + d.citation + "</span>";
});

var line = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(.85)
    .radius(function (d) {
    return d.y;
})
    .angle(function (d) {
    return d.x / 180 * Math.PI;
});

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")
    .call(tip);

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
    .on("mousedown", tip.show)
    .on("mouseup", tip.hide)
    .on("touchstart", tip.show)
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