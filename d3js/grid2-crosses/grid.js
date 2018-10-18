let width = 600;
let height = 600;

document.body.onclick = () => location.reload();

d3.select('svg')
  .append('g')
  .attr('id', 'crosses-h')
  ;

d3.select('svg')
  .append('g')
  .attr('id', 'crosses-v')
  ;

let crossesData = d3.cross(d3.ticks(0, 1, 10), d3.ticks(0, 1, 10));

d3.select('#crosses-h')
  .selectAll('line')
  .data(crossesData)
  .enter()
    .append('line')
    .attr('stroke', 'grey')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', 0)
    .transition()
      .duration(1000)
      .attr('x1', d => 50 + d[0] * (width-50*2) - 3)
      .attr('y1', d => 50 + d[1] * (height-50*2))
      .attr('x2', d => 50 + d[0] * (width-50*2) + 3)
      .attr('y2', d => 50 + d[1] * (height-50*2))
  ;


d3.select('#crosses-v')
  .selectAll('line')
  .data(crossesData)
  .enter()
    .append('line')
    .attr('stroke', 'grey')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', 0)
    .transition()
      .delay(1000)
      .duration(2000)
      .ease(d3.easeElastic)
      .attr('x1', d => 50 + d[0] * (width-50*2))
      .attr('y1', d => 50 + d[1] * (height-50*2) - 3)
      .attr('x2', d => 50 + d[0] * (width-50*2))
      .attr('y2', d => 50 + d[1] * (height-50*2) + 3)
  ;
