Highcharts.chart('Bubblecontainer', {
  chart: {
    type: 'packedbubble',
    height: '70%'
  },
  title: {
    text: 'Subsectors with the largest percent change in seasonally adjusted employees from February to April 2020, by size of subsector<sup>*</sup>'
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> -{point.value} % Change'
  },
  plotOptions: {
    packedbubble: {
      minSize: '20%',
      maxSize: '100%',
      zMin: 20,
      zMax: 95,
      layoutAlgorithm: {
        gravitationalConstant: .05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: false,
        parentNodeLimit: true
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 200
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal'
        }
      }
    }
  },
  series: [{
    name: 'Large subsectors',
    data: [{
      name: 'Amusements, gambling and recreation',
      value: 59.9
    }, {
      name: 'Food services and drinking places',
      value: 48.1
    },
    {
      name: "Accommodation",
      value: 42.3
    },
    {
      name: "Administrative and support services",
      value: 18.0
    }]
  }, {
    name: 'Medium subsectors',
    data: [{
      name: "Clothing and clothing accessories stores",
      value: 58.9
    },
    {
      name: "Personal and laundry services",
      value: 53.5
    },
    {
      name: "Performing arts and spectator sports",
      value: 45.4
    },
    {
      name: "Transit and ground passenger transportation",
      value: 37.4
    },
    {
      name: "Sporting goods, hobby, book and music stores",
      value: 36.2
    }]
  }, {
    name: 'Small subsectors',
    data: [{
      name: "Scenic and sightseeing transportation",
      value: 62.1
    },
    {
      name: "Motion picture and sound recording industries",
      value: 48.3
    },
    {
      name: "Furniture and home furnishings stores",
      value: 46.3
    },
    {
      name: "Apparel",
      value: 30.6
    },
    {
      name: "Museums, historical sites and similar institutions",
      value: 26.1
    }]
  }]
});

