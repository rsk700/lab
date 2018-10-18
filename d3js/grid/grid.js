let width = 600;
let height = 600;

document.body.onclick = () => location.reload();

d3.select('svg')
  .append('g')
  .attr('class', 'rects')
  ;
d3.select('svg')
  .append('g')
  .attr('class', 'rows')
  ;
d3.select('svg')
  .append('g')
  .attr('class', 'columns')
  ;

d3.select('.columns')
  .selectAll('line')
  .data(d3.ticks(0, 1, 10))
  .enter()
    .append('line')
    .attr('stroke', 'grey')
    .attr('x1', 0)
    .attr('y1', 30)
    .attr('x2', 0)
    .attr('y2', height-30)
    .transition()
      .duration(2000)
      .ease(d3.easeElastic)
      .attr('x1', d => 50 + d * (width-50*2))
      .attr('x2', d => 50 + d * (width-50*2))
  ;

d3.select('.rows')
  .selectAll('line')
  .data(d3.ticks(0, 1, 10))
  .enter()
    .append('line')
    .attr('stroke', 'grey')
    .attr('x1', 30)
    .attr('y1', 0)
    .attr('x2', width-30)
    .attr('y2', 0)
    .transition()
      .duration(2000)
      .ease(d3.easeElastic)
      .attr('y1', d => 50 + d * (height-50*2))
      .attr('y2', d => 50 + d * (height-50*2))
  ;

let rectsData = d3.cross(d3.range(0, 1, 0.1), d3.range(0, 1, 0.1));

d3.select('.rects').selectAll('rect')
  .data(rectsData)
  .enter()
    .append('rect')
    .attr('fill', 'white')
    .attr('stroke', 'white')
    .attr('x', d => 50 + d[0] * (width-50*2) + 3)
    .attr('y', d => 50 + d[1] * (height-50*2) + 3)
    .attr('width', 44)
    .attr('height', 44)
    .on('mouseover', function(d) {
      d3.select(this)
        .attr('fill', 'red')
        .transition()
          .duration(1000)
          .attr('fill', 'white')
        ;
    })
  ;
