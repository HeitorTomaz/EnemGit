
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisGeral(){
	grafico = vis.selectAll(".grafico")
			.data([0])
		   	.enter()
		    .append("g")
		    .attr("class","grafico")
			.attr("transform",function(d,i){return "translate("+ scatterplotX + "," + scatterplotY + ")";});

	grafico.data(dataset)
		    .enter();

	var xAxis = d3.svg.axis()
	    .scale(stateScale)
	    .orient("bottom")
		.tickFormat(function(d) { return "" + dataset[d].Estado; });

	var yAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("left");

	grafico.append("g")
	      .attr("class", "y-axis")
	      .call(yAxis);

	grafico.selectAll(".domain").remove();

  	grafico.selectAll(".domain-2")
		.data([1 , 2, 3, 4, 5, 6, 7, 8, 9, 10])
		.enter()
		.append("line")
		.attr("x1", -5 )     // x position of the first end of the line
		.attr("y1", function(d, i){return i*tamanhoy/9.5 +3;})      // y position of the first end of the line
		.attr("x2", 0 )     // x position of the second end of the line
		.attr("y2", function(d, i){return i*tamanhoy/9.5 +3;})
		.attr("class", "domain-2");


  	grafico.selectAll(".dotLines")
		.data(dataset)
		.enter()
		.append("line")
		.attr("x1", function(d, i) { return stateScale(Number( i )); })     // x position of the first end of the line
		.attr("y1", 0)      // y position of the first end of the line
		.attr("x2", function(d, i) { return stateScale(Number( i )); })     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.attr("class", "dotLines");
		
	grafico.selectAll(".x-axis-text")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "x-axis-text")
	        .attr("x", positionXAxisX )
	        .attr("y", positionXAxisY )
	        .style("text-anchor", "left")
	        .text("Estados");


	grafico.selectAll(".y-axis-text")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "y-axis-text")
	        .attr("transform", "rotate(-90)")
	        .attr("x", positionYAxisX )
	        .attr("y", positionYAxisY )
	        .style("text-anchor", "middle")
	        .text("Médias");


  	grafico.selectAll(".dotLinguagens")
	      .data(dataset)
	      .enter()
	      .append("rect")
	      .attr("class", "dotLinguagens")
		  .attr("width", 10)
	      .attr("height", 10)
	      .attr("x", function(d, i) { return stateScale(Number( i )) - 5; })
	      .attr("y", tamanhoy)
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Linguagens: " + d["Linguagens"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  })
      	.style("visibility", "hidden")
      	  .transition()
      	  .style("visibility", "visible")
      	.attr("y", function(d) { return gradeScale(Number(d["Linguagens"])); })
		.delay(function(d, i){return 100*1;})
		.duration(800);
	    
	grafico.selectAll(".dotHumanas")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotHumanas")
	      .attr("r", 5)
	      .attr("cx", function(d, i) { return stateScale(Number( i )); })
	      .attr("cy", tamanhoy) //function(d) { return gradeScale(Number(d["Humanas"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Humanas: " + d["Humanas"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  })
  		  .style("visibility", "hidden")
      	  .transition()
      	  .style("visibility", "visible")
  		  .attr("cy", function(d) { return gradeScale(Number(d["Humanas"])); })
		  .delay(function(d, i){return 350*1;})
		  .duration(800);

	grafico.selectAll(".dotNatureza")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotNatureza")
	      .attr("r", 5)
	      .attr("cx", function(d, i) { return stateScale(Number( i )); })
	      .attr("cy", tamanhoy) //function(d) { return gradeScale(Number(d["Natureza"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Natureza: " + d["Natureza"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  })
      	  .style("visibility", "hidden")
      	  .transition()
      	  .style("visibility", "visible")
      	  .attr("cy", function(d) { return gradeScale(Number(d["Natureza"])); })
		  .delay(function(d, i){return 600*1;})
		  .duration(800);

	grafico.selectAll(".dotMatematica")
	      .data(dataset)
	      .enter()
	      .append("rect")
	      .attr("class", "dotMatematica")
		  .attr("width", 10)
	      .attr("height", 10)
	      .attr("x", function(d, i) { return stateScale(Number( i )) - 5; })
	      .attr("y", tamanhoy) //function(d) { return gradeScale(Number(d["Matematica"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Matematica: " + d["Matematica"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  })
      	  .style("visibility", "hidden")
      	  .transition()
      	  .style("visibility", "visible")
  	      .attr("y", function(d) { return gradeScale(Number(d["Matematica"])); })
		  .delay(function(d, i){return 850*1;})
		  .duration(800);


	grafico.selectAll(".dotRedacao")
	      .data(dataset)
	      .enter()
	      .append("polygon")
	      .attr("class", "dotRedacao")
	      .attr("points", function(d, i){
		    	var point = [];
		    	var lado = 10
		    	point[1] = (stateScale(Number( i )) - lado/2) + ','
		    	point[2] = tamanhoy + ' ' //gradeScale(Number(d["Redacao"])) + ' '
		    	point[3] = (stateScale(Number( i )) + lado/2) + ','
		    	point[4] = tamanhoy + ' ' //(gradeScale(Number(d["Redacao"]))) + ' '
		    	point[5] = (stateScale(Number( i ))) + ','
		    	point[6] = tamanhoy + ' ' //(gradeScale(Number(d["Redacao"])) - lado*1.85/2) + '' 
		    	
		    	
		    	var points = '';

		    	for (i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})//return stateScale(Number( i )) + ',' + tamanhoy;})
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Redacao: " + d["Redacao"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  })
      	  .style("visibility", "hidden")
      	  .transition()
      	  .style("visibility", "visible")
	      .attr("points", function(d, i){
		    	var point = [];
		    	var lado = 10
		    	point[1] = (stateScale(Number( i )) - lado/2) + ','
		    	point[2] = gradeScale(Number(d["Redacao"])) + ' '
		    	point[3] = (stateScale(Number( i )) + lado/2) + ','
		    	point[4] = (gradeScale(Number(d["Redacao"]))) + ' '
		    	point[5] = (stateScale(Number( i ))) + ','
		    	point[6] = (gradeScale(Number(d["Redacao"])) - lado*1.85/2) + '' 
		    	
		    	
		    	var points = '';

		    	for (var i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})
	      .delay(function(d, i){return 1100*1;})
	      .duration(800);



  	grafico.selectAll(".textLabels")
	      .data(dataset)
	      .enter()
	      .append("text")
	      .attr("class", "textLabels")
	      .text( function (d) { return "" + d.Estado; })
	      .attr("x", function(d, i) { return stateScale(Number( i )); })
	      .attr("y", tamanhoy + 20);

    grafico.selectAll(".lineX")
    	.data([0])
    	.enter()
    	.append("line")
    	.attr("x1", 0)     // x position of the first end of the line
		.attr("y1", tamanhoy)      // y position of the first end of the line
		.attr("x2", tamanhox)     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.attr("class", "lineX");
}








function VisGeralUpdate(dados, sub){
console.log(sub)
	grafico.selectAll(".active")
		.classed("active", false);


	grafico.selectAll(".dot"+ sub)
		.classed("active", true);



 	var stateScale2 = function(d){
		for (var indice = 0; indice < dados.length; indice++){
			if (d === dados[indice]){ return indice;};
		};
		return 0;
	};
  	grafico.selectAll(".dotLines")
  		.transition()
		.attr("x1", function(d, i) { return stateScale(Number( stateScale2(d) )); })     // x position of the first end of the line
		.attr("y1", 0)      // y position of the first end of the line
		.attr("x2", function(d, i) { return stateScale(Number( stateScale2(d) )); })     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.delay(function(d, i){return 120*i;})
		.duration(1000);
		
  	grafico.selectAll(".dotLinguagens")
  		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Linguagens"])); })
	      .delay(function(d, i){return 120*i;})
	      .duration(1000);
	      //.style("fill", function(d) { return "blue"; });

	grafico.selectAll(".dotHumanas")
		  .transition()
	      .attr("cx", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Humanas"])); })
	      .delay(function(d, i){return 120*i;})
	      .duration(1000);

	grafico.selectAll(".dotNatureza")
		  .transition()
	      .attr("cx", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Natureza"])); })
	      .delay(function(d, i){return 120*i;})
	      .duration(1000);

	grafico.selectAll(".dotMatematica")
		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Matematica"])); })
	      .delay(function(d, i){return 120*i;})
	      .duration(1000);

	grafico.selectAll(".dotRedacao")
		  .transition()
	      .attr("points", function(d, i){
		    	var point = [];
		    	var lado = 10
		    	point[1] = (stateScale(Number( stateScale2(d) )) - lado/2) + ','
		    	point[2] = gradeScale(Number(d["Redacao"])) + ' '
		    	point[3] = (stateScale(Number( stateScale2(d) )) + lado/2) + ','
		    	point[4] = (gradeScale(Number(d["Redacao"]))) + ' '
		    	point[5] = (stateScale(Number( stateScale2(d) ))) + ','
		    	point[6] = (gradeScale(Number(d["Redacao"])) - lado*1.85/2) + '' 
		    	
		    	
		    	var points = '';

		    	for (var i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})
	      .delay(function(d, i){return 120*i;})
	      .duration(1000);



  	grafico.selectAll(".textLabels")
  		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("y", tamanhoy + 20)
  	      .delay(function(d, i){return 120*i;})
	      .duration(1000);

console.log(dados);
}