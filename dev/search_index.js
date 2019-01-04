var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "home",
    "title": "home",
    "category": "page",
    "text": ""
},

{
    "location": "#PhyloPlots.jl-1",
    "page": "home",
    "title": "PhyloPlots.jl",
    "category": "section",
    "text": "PhyloPlots is a Julia package to plot phylogenetic trees and networks.PhyloNetworks objects can be displayed via Gadfly, and through R via RCall.Pages = [\"lib/public.md\", \"lib/internals.md\"]\nDepth = 1"
},

{
    "location": "#functions-1",
    "page": "home",
    "title": "functions",
    "category": "section",
    "text": "Pages = [\"lib/public.md\", \"lib/internals.md\"]\nOrder = [:function]<!–Order = [:type] –>"
},

{
    "location": "lib/public/#",
    "page": "public",
    "title": "public",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public/#public-documentation-1",
    "page": "public",
    "title": "public documentation",
    "category": "section",
    "text": "Documentation for PhyloPlots\'s public (exported) functions."
},

{
    "location": "lib/public/#index-1",
    "page": "public",
    "title": "index",
    "category": "section",
    "text": "Pages = [\"public.md\"]<!– ## Types –>"
},

{
    "location": "lib/public/#Gadfly.plot-Tuple{PhyloNetworks.HybridNetwork,Symbol}",
    "page": "public",
    "title": "Gadfly.plot",
    "category": "method",
    "text": "plot(net::HybridNetwork, method::Symbol)\n\nPlot a network using R graphics. method should be :R (actually, for now any symbol would do!).\n\noptional arguments, shared with the Gadfly-based plot function:\n\nuseEdgeLength: if true, the tree edges and major hybrid edges are drawn proportionally to their length. Minor hybrid edges are not, however. Note that edge lengths in coalescent units may scale very poorly with time.\nshowTipLabel: if true, taxon labels are shown. You may need to zoom out to see them.\nshowNodeNumber: if true, nodes are labelled with the number used internally.\nshowEdgeLength: if true, edges are labelled with their length (above)\nshowGamma: if true, hybrid edges are labelled with their heritability (below)\nedgeColor: color for tree edges. black by default.\nmajorHybridEdgeColor: color for major hybrid edges\nminorHybridEdgeColor: color for minor hybrid edges\nshowEdgeNumber: if true, edges are labelled with the number used internally.\nshowIntNodeLabel: if true, internal nodes are labelled with their names. Useful for hybrid nodes, which do have tags like \'#H1\'.\nedgeLabel: dataframe with two columns: the first with edge numbers, the second with labels (like bootstrap values) to annotate edges. empty by default.\nnodeLabel: dataframe with two columns: the first with node numbers, the second with labels (like bootstrap values for hybrid relationships) to annotate nodes. empty by default.\n\noptional arguments specific to this function:\n\nxlim, ylim: array of 2 values\ntipOffset: to offset tip labels\n\nNote that plot actually modifies some (minor) attributes of the network, as it calls directEdges!, preorder! and cladewiseorder!.\n\nIf hybrid edges cross tree and major edges, you may choose to rotate some tree edges to eliminate crossing edges, using rotate! (in PhyloNetworks).\n\nAlternative: a tree or network can be exported with sexp and then displayed with R\'s \"plot\" and all its options.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Gadfly.plot-Tuple{PhyloNetworks.HybridNetwork}",
    "page": "public",
    "title": "Gadfly.plot",
    "category": "method",
    "text": "plot(net::HybridNetwork; useEdgeLength=false, mainTree=false, showTipLabel=true,\n     showNodeNumber=false, showEdgeLength=false, showGamma=false, edgeColor=colorant\"black\",\n     majorHybridEdgeColor=colorant\"deepskyblue4\", minorHybridEdgeColor=colorant\"deepskyblue\",\n     showEdgeNumber=false, showIntNodeLabel=false, edgeLabel=[], nodeLabel=[])\n\nPlots a network, from left to right.\n\nuseEdgeLength: if true, the tree edges and major hybrid edges are drawn proportionally to their length. Minor hybrid edges are not, however. Note that edge lengths in coalescent units may scale very poorly with time.\nmainTree: if true, the minor hybrid edges are ommitted.\nshowTipLabel: if true, taxon labels are shown. You may need to zoom out to see them.\nshowNodeNumber: if true, nodes are labelled with the number used internally.\nshowEdgeLength: if true, edges are labelled with their length (above)\nshowGamma: if true, hybrid edges are labelled with their heritability (below)\nedgeColor: color for tree edges. black by default.\nmajorHybridEdgeColor: color for major hybrid edges\nminorHybridEdgeColor: color for minor hybrid edges\nshowEdgeNumber: if true, edges are labelled with the number used internally.\nshowIntNodeLabel: if true, internal nodes are labelled with their names. Useful for hybrid nodes, which do have tags like \'#H1\'.\nedgeLabel: dataframe with two columns: the first with edge numbers, the second with labels (like bootstrap values) to annotate edges. empty by default.\nnodeLabel: dataframe with two columns: the first with node numbers, the second with labels (like bootstrap values for hybrid relationships) to annotate nodes. empty by default.\n\nNote that plot actually modifies some (minor) attributes of the network, as it calls directEdges!, preorder! and cladewiseorder!.\n\nIf hybrid edges cross tree and major edges, you may choose to rotate some tree edges to eliminate crossing edges, using rotate!.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Gadfly.plot-Tuple{PhyloNetworks.TwoBinaryTraitSubstitutionModel}",
    "page": "public",
    "title": "Gadfly.plot",
    "category": "method",
    "text": "plot(model::TwoBinaryTraitSubstitutionModel)\n\nDisplay substitution rates for a trait evolution model for two possibly dependent binary traits; using R via RCall. Adapted from fitPagel functions found in the R package phytools.\n\nExamples\n\njulia> using PhyloNetworks\n\njulia> m = TwoBinaryTraitSubstitutionModel([2.0,1.2,1.1,2.2,1.0,3.1,2.0,1.1],\n                [\"carnivory\", \"noncarnivory\", \"wet\", \"dry\"])\nSubstitution model for 2 binary traits, with rate matrix:\n                     carnivory-wet    carnivory-dry noncarnivory-wet noncarnivory-dry\n    carnivory-wet                *           1.0000           2.0000           0.0000\n    carnivory-dry           3.1000                *           0.0000           1.1000\n noncarnivory-wet           1.2000           0.0000                *           2.0000\n noncarnivory-dry           0.0000           2.2000           1.1000                *\n\njulia> plot(m);\n\n\n\n\n\n"
},

{
    "location": "lib/public/#RCall.sexp-Tuple{PhyloNetworks.HybridNetwork}",
    "page": "public",
    "title": "RCall.sexp",
    "category": "method",
    "text": "function sexp(net::HybridNetwork)\n\nExport a HybridNework object to the R language as either phylo or evonet object (depending on degree of hybridization) recognized by the R package ape. Used by the $object syntax and by @rput to use a Julia object in R: see the examples below. Makes it easy to plot a Julia tree or network using plotting facilities in R.\n\ncode inspired from Phylo.jl\n\nExamples\n\njulia> using RCall\njulia> using PhyloNetworks\njulia> net = readTopology(\"(((A:.2,(B:.1)#H1:.1::0.9):.1,(C:.11,#H1:.01::0.1):.19):.1,D:.4);\");\nR> library(ape); # type $ to switch from julia to R\nR> $net\n\nEvolutionary network with 1 reticulation\n\n               --- Base tree ---\nPhylogenetic tree with 4 tips and 5 internal nodes.\n\nTip labels:\n[1] \"A\" \"B\" \"C\" \"D\"\n\nRooted; includes branch lengths.\njulia> @rput net # press the delete key to switch from R back to julia\nR> net\n\nEvolutionary network with 1 reticulation\n\n--- Base tree ---\nPhylogenetic tree with 4 tips and 5 internal nodes.\n\nTip labels:\n[1] \"A\" \"B\" \"C\" \"D\"\n\nRooted; includes branch lengths.\n\nR> str(net)\nList of 7\n $ edge               : int [1:8, 1:2] 5 5 6 6 7 8 8 9 6 4 ...\n $ reticulation.length: num 0.01\n $ Nnode              : int 5\n $ edge.length        : num [1:8] 0.1 0.4 0.1 0.19 0.11 0.2 0.1 0.1\n $ reticulation       : int [1, 1:2] 7 9\n $ reticulation.gamma : num 0.1\n $ tip.label          : chr [1:4] \"A\" \"B\" \"C\" \"D\"\n - attr(*, \"class\")= chr [1:2] \"evonet\" \"phylo\"\nNULL\n\nR> plot(net)\n\n\n\n"
},

{
    "location": "lib/public/#functions-1",
    "page": "public",
    "title": "functions",
    "category": "section",
    "text": "Modules = [PhyloPlots]\nPrivate = false\nOrder   = [:function]"
},

{
    "location": "lib/internals/#",
    "page": "internals",
    "title": "internals",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/#internal-documentation-1",
    "page": "internals",
    "title": "internal documentation",
    "category": "section",
    "text": "Documentation for PhyloPlots\'s internal functions. Those functions are not exported, but can still be used (like: PhyloPlots.foo() for a function named foo()).<!–@contents Pages = [\"internals.md\"]–>"
},

{
    "location": "lib/internals/#index-1",
    "page": "internals",
    "title": "index",
    "category": "section",
    "text": "Pages = [\"internals.md\"]<!– ## Types –>"
},

{
    "location": "lib/internals/#PhyloPlots.checkNodeDataFrame-Tuple{PhyloNetworks.HybridNetwork,DataFrames.DataFrame}",
    "page": "internals",
    "title": "PhyloPlots.checkNodeDataFrame",
    "category": "method",
    "text": "checkNodeDataFrame(net, nodeLabel)\n\nCheck data frame for node annotations:\n\ncheck that the data has at least 2 columns (if it has any)\ncheck that the first column has integers (to serve as node numbers)\nremove rows with no node numbers\nwarning if some node numbers in the data are not in the network.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/#PhyloPlots.getEdgeNodeCoordinates-Tuple{PhyloNetworks.HybridNetwork,Bool}",
    "page": "internals",
    "title": "PhyloPlots.getEdgeNodeCoordinates",
    "category": "method",
    "text": "getEdgeNodeCoordinates(net, useEdgeLength)\n\nCalculate coordinates for plotting later with Gadfly or RCall.\n\nActually modifies some (minor) attributes of the network, as it calls directEdges!, preorder! and cladewiseorder!.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/#PhyloPlots.prepareEdgeDataFrame-Tuple{PhyloNetworks.HybridNetwork,DataFrames.DataFrame,Bool,Array{Float64,1},Array{Float64,1},Array{Float64,1},Array{Float64,1}}",
    "page": "internals",
    "title": "PhyloPlots.prepareEdgeDataFrame",
    "category": "method",
    "text": "prepareEdgeDataFrame(net, edgeLabel::DataFrame, mainTree::Bool,\n    edge_xB, edge_xE, edge_yB, edge_yE)\n\nCheck data frame for edge annotation. edge_*: Float64 vectors giving the coordinates for the beginning and end of edges. Return data frame with columns\n\nx, y: coordinates on the plots\nlen: node name\ngam: gamma (inheritance value)\nnum: node number\nlab: node label\nhyb: is hybrid?\nmin: is minor?\n\n\n\n\n\n"
},

{
    "location": "lib/internals/#PhyloPlots.prepareNodeDataFrame-Tuple{PhyloNetworks.HybridNetwork,DataFrames.DataFrame,Bool,Bool,Bool,Array{Float64,1},Array{Float64,1}}",
    "page": "internals",
    "title": "PhyloPlots.prepareNodeDataFrame",
    "category": "method",
    "text": "prepareNodeDataFrame(net, nodeLabel::DataFrame,\n    showNodeNumber::Bool, showIntNodeLabel::Bool, labelnodes::Bool,\n    node_x, node_y)\n\nMake data frame for node annotation. node_* should be Float64 vectors. nodeLabel should have columns as required by checkNodeDataFrame\n\nColumns of output data frame:\n\nx, y: coordinates on the plots (from node_*)\nname: node name\nnum: node number\nlab: node label\nlea: is leaf?\n\n\n\n\n\n"
},

{
    "location": "lib/internals/#PhyloPlots.rexport-Tuple{PhyloNetworks.HybridNetwork}",
    "page": "internals",
    "title": "PhyloPlots.rexport",
    "category": "method",
    "text": "rexport(net::HybridNetwork; mainTree=false, useEdgeLength=true)\n\nCreate an RObject of class phylo (and evonet depending on the number of hybridizations) recognized by the ape library in R (S3 object). This RObject can be evaluated using the tools available in the ape library in R. For example, we can visualize the network using ape\'s plot function.\n\nnot exported: sexp is the best way to go.\n\nArguments\n\nuseEdgeLength: if true, export edge lengths from net.\nmainTree: if true, minor hybrid edges are omitted.\n\nExamples\n\njulia> net = readTopology(\"(((A,(B)#H1:::0.9),(C,#H1:::0.1)),D);\");\njulia> phy = rexport(net)\nRCall.RObject{RCall.VecSxp}\n$Nnode\n[1] 5\n\n$edge\n     [,1] [,2]\n[1,]    5    6\n[2,]    5    4\n[3,]    6    8\n[4,]    6    7\n[5,]    7    3\n[6,]    8    1\n[7,]    8    9\n[8,]    9    2\n\n$tip.label\n[1] \"A\" \"B\" \"C\" \"D\"\n\n$reticulation\n     [,1] [,2]\n[1,]    7    9\n\n$reticulation.gamma\n[1] 0.1\n\nattr(,\"class\")\n[1] \"evonet\" \"phylo\"\n\njulia> using RCall\n\njulia> R\"library(ape)\";\n\njulia> phy\nRCall.RObject{RCall.VecSxp}\n\n    Evolutionary network with 1 reticulation\n\n               --- Base tree ---\nPhylogenetic tree with 4 tips and 5 internal nodes.\n\nTip labels:\n[1] \"A\" \"B\" \"C\" \"D\"\n\nRooted; no branch lengths.\n\nR> phy\n\nEvolutionary network with 1 reticulation\n\n               --- Base tree ---\nPhylogenetic tree with 4 tips and 5 internal nodes.\n\nTip labels:\n[1] \"A\" \"B\" \"C\" \"D\"\n\nRooted; no branch lengths.\n\nR> str(phy)\nList of 5\n$ Nnode             : int 5\n$ edge              : int [1:8, 1:2] 5 5 6 6 7 8 8 9 6 4 ...\n$ tip.label         : chr [1:4] \"A\" \"B\" \"C\" \"D\"\n$ reticulation      : int [1, 1:2] 7 9\n$ reticulation.gamma: num 0.1\n- attr(*, \"class\")= chr [1:2] \"evonet\" \"phylo\"\n\n\n\n"
},

{
    "location": "lib/internals/#functions-1",
    "page": "internals",
    "title": "functions",
    "category": "section",
    "text": "Modules = [PhyloPlots]\nPublic = false\nOrder   = [:function]"
},

]}
