import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material/styles"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "passColor"
})(({ theme, passColor }) => ({
  height: 5,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    ...(passColor && {
      backgroundColor: passColor,
    })
  },
}));

const CustomLinearProgress = ({
  value,
  color,
  ...rest
}) => {
  return (
    <BorderLinearProgress passColor={color} variant='determinate' value={value} {...rest} />
  )
}

CustomLinearProgress.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string
}

CustomLinearProgress.defaultProps = {
  color: '#1a90ff'
}

export default CustomLinearProgress
