import React from 'react'
import { Box, Grid, Paper, Stack, Typography, } from '@mui/material'
import { styled } from '@mui/material/styles';
import { ReactComponent as CardRequest } from "../../../../assets/svg/off.svg";
import { ReactComponent as Printer } from "../../../../assets/svg/printer.svg";
import { ReactComponent as Cardtemplate } from "../../../../assets/svg/cardtemplate.svg";
import { ReactComponent as Signature } from "../../../../assets/svg/signature.svg";
import { ReactComponent as Responstime } from "../../../../assets/svg/responsetime.svg";
import { ReactComponent as Tasklist } from "../../../../assets/svg/tasklist.svg";
import DougnutChart from '../../../../utils/Chart';
import { LinearProgress } from '../../../../reusable';



const dataObj = [
  {
    label: "ade",
    value: 0,
  },
  {
    label: "aDelede",
    value: 15,
  },
  {
    label: "Obembe",
    value: 5,
  },
  {
    label: "Yemi",
    value: 20,
  },
  {
    label: "Opemipo",
    value: 10,
  },
]



const StyledBox = styled(Box)({
  display: 'flex',
  // flexWrap: 'wrap',
})
const StyledTypography = styled(Typography)({
  fontWeight: 500,
  fontSize: "16px",
  // color: "#272833",
  padding: "10px",
  color: "#1E0A3C",

})
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  border: '1px solid #E5E5EA',
  borderRadius: '0px 0px 4px 4px',
  padding: theme.spacing(3, 3)
}))

const StatCard = ({
  cardTitle,
  cardValue,
  cardColor
}) => (
  <Box sx={{ mr: 5, height: "100%", width: "100%" }}>
    <LinearProgress value={cardValue} color={cardColor} />
    <Typography variant='body1'>
      {cardTitle}
    </Typography>
    <Typography
      variant='h5'
      fontWeight={700}
      fontSize={18}
      lineHeight={1.5}
      textAlign="center"
      sx={{ color: "#1E0A3C" }}
    >
      {`${cardValue} %`}
    </Typography>
  </Box>
)

const Workbench = () => {
  return (
    <div>
      <Typography>WorkBench</Typography>
      <Grid container>
        <Grid item md={9}>
          <StyledPaper>
            <Paper sx={{ boxShadow: '0px 2px 0px #E5E5EA', borderRadius: '4px 4px 0px 0px', my: 3 }}>
              <Typography sx={{ fontWeight: 400, fontSize: "18px", color: "#1E0A3C" }}>
                <Tasklist />  Task: You Have 63 request to attend to.
              </Typography>
            </Paper>
            <Grid container spacing={3}>
              <Grid item md={3}>
                <DougnutChart dataObj={dataObj} />
              </Grid>
              <Grid item md={9}>
                <Stack
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ py: 3, height: "100%", }}
                >
                  <StatCard cardTitle="Card Request" cardValue={23} cardColor="#1E0A3C" />
                  <StatCard cardTitle="Printing Queue" cardValue={89} cardColor="red" />
                  <StatCard cardTitle="Signatories" cardValue={70} cardColor="#1E0A3C" />
                  <StatCard cardTitle="Card Template" cardValue={50} cardColor="#1E0A3C" />
                  <Box sx={{ mr: 5, height: "100%", width: "100%" }} />
                </Stack>
              </Grid>
            </Grid>

            {/* <Box>

          </Box> */}
          </StyledPaper>
          <StyledBox>
            <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography> < CardRequest /> Card Request</StyledTypography>
            </Paper>
            <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography><Printer /> Printing Queue </StyledTypography>
            </Paper>
            <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography> <Signature />Signatories</StyledTypography>
            </Paper>
            <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography> <Cardtemplate /> Card Template</StyledTypography>
            </Paper>

          </StyledBox>

        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              width: "200px",
              height: "229px",
              ml: 2
            }}
          >
            <StyledTypography sx={{ fontSize: "20px" }}>  <Responstime /> Response time</StyledTypography>
            <Typography sx={{
              fontSize: "14px", padding: "5px"
            }}> You have 12 pending request to  attend to. Your progress activity is excellent</Typography>
          </Paper>

        </Grid>
      </Grid>
      {/* <StyledBox>
        <Box>


        </Box>

      </StyledBox> */}
    </div>
  )
}

export default Workbench
