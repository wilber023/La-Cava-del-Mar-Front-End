  import ReactEcharts from 'echarts-for-react';
  import PropTypes from 'prop-types';

  const TurbidezChart = ({ data = [] }) => {
    const chartData = Array.isArray(data) ? data : [];

    const options = {
      title: {
        text: 'Niveles de Turbidez del Agua'
      },
      xAxis: {
        type: 'category',
        data: chartData.map((entry) => entry.timestamp),
        axisLabel: {
          interval: 0,   
          rotate: 0,    
        }
      },
      yAxis: {
        type: 'value',
        name: 'Turbidez (0 - 4095)',
        min: 0,
        max: 4095
      },
      series: [
        {
          data: chartData.map((entry) => entry.turbidez), 
          type: 'line',
          smooth: true,
          areaStyle: {},
          lineStyle: {
            color: '#409EFF'
          },
          name: 'Turbidez'
        }
      ]
    };

    return <ReactEcharts option={options} style={{ height: '400px', width: '100%' }} />;
  };

  TurbidezChart.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        turbidez: PropTypes.number.isRequired
      })
    )
  };

  export default TurbidezChart;
