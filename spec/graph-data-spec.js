describe("GraphData", function() {
  var graphData, data, statuses;

  beforeEach(function() {
    statuses = [
      {
        name: 'assigned',
        hex:  '#DDE1E4'
      }, {
        name: 'inProgress',
        hex:  '#EDA72A'
      }, {
        name: 'forReview',
        hex:  '#33ACE0'
      }, {
        name: 'delivered',
        hex:  '#CCE7AE'
      }
    ]
    data = MockData.graphOne;
    graphData = new GraphData(data, statuses);
  });

  it("remembers the original data", function() {
    expect(graphData.data).toEqual(data);
  });

  it('knows the names of ranges', function() {
    expect(graphData.rangeNames).toEqual(['0-2', '3-5', '6-8', '9-11', '12-14', '15-17', '18-20', '21+'])
  });

  it('knows the maxRange', function() {
    expect(graphData.maxRange).toEqual(7)
  });

  it('has a range count', function() {
    expect(graphData.rangeCount).toEqual(8)
  });

  it('has parsed data', function() {
    expect(JSON.stringify(graphData.parsedData)).toEqual(graphOneFormattedJson);
  });
});
