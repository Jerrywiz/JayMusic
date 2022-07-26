
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import PropTypes from "prop-types"
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip);

const DougnutChart = ({
  dataObj
}) => {
  const formatDataLabel = dataObj?.map(field => field?.label)
  const formatDataValue = dataObj?.map(field => field?.value)

  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: formatDataLabel,
    datasets: [
      {
        label: '# of Votes',
        // data: [12, 19, 3, 5, 2, 3],
        data: formatDataValue,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut data={data} />
  )
}

DougnutChart.propTypes = {
  dataObj: PropTypes.arrayOf([PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
  ])
}

DougnutChart.defaultProps = {
  dataObj: [
    {
      label: "",
      value: 0
    }
  ]
}

export default DougnutChart
