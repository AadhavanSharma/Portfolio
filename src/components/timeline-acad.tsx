// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import useWindowDimensions from '@/hooks/window-dimensions';

const TimelineAcad = () => {
  const {width} = useWindowDimensions();
  return (
    <div className=" grid grid-rows-100 min-w-full h-160 border-0">
      <div className=" row-span-40 grid grid-cols-4 min-w-full border-0">
        <div className="grid col-span-1 border-0 justify-end">
          <TimelineSeparator sx={{margin:"auto auto",display:"flex",alignItems:"center",justifyContent:"center"}} className="border-0 h-60 row-span-10 flex justify-center">
              <TimelineConnector className="h-40 border-2 border-[#4285F4]" sx={{bgcolor:'primary.main'}}/>
              <TimelineDot color = "primary" className="border-0 flex items-center justify-center" sx={{width: 48, height: 58,padding:0.1}}>
                <img className='rounded-full' src = "dpsg.png"  alt = "am"></img>
              </TimelineDot>
              <TimelineConnector className="h-40 mb-2 border-2 border-[#4285F4]" sx={{bgcolor:'primary.main'}}/>
              <div className='border-0 p-0 -my-2'>
              <TimelineDot sx={{scale:0.6,bgcolor:"#FBBC04"}}></TimelineDot>
              </div>
          </TimelineSeparator>          
        </div>
        <div className="grid col-span-3 border-0 border-green-500 justify-start">
          <TimelineContent className="" sx={{ py: '12px', px: 2,border:0 }}>
            <Typography style ={{fontFamily:"English Towne"}} className=" border-0 flex justify-center" variant="h6" component="div">
              <p className='text-3xl text-gray-300/80'>
                High School 
              </p>
            </Typography>
            <Typography  style = {{fontFamily:"initial"}} className="border-0 grid text-center justify-center" component="span">
              Delhi Public School GZB.
            </Typography>
            <Typography className="border-0 grid text-center justify-center" component="span">
              <p style ={{fontFamily:"English Towne"}}>
                ⟨2017 - 2019⟩
              </p>
            </Typography>
            <Typography className="border-0 text-center" >
              <div className='border-y-1 italic text-gray-300/80 font-serif'>Scored 93% in XII<sup>th</sup> Board</div>
              Completed in Science (P.C.M.) With as Geospatial Technology.
              {width>=508 && <p  className='bold inline-block'><span>Along with it, I also
              prepared for JEE, Secured </span>AIR 5719 in JEE Mains</p>}
            </Typography>
          </TimelineContent>
        </div>
      </div>

      <div className="row-span-60 grid grid-cols-4 min-w-full border-0">
        <div className="grid col-span-1 border-0 justify-end">
          <TimelineSeparator sx={{margin:"auto auto",display:"flex",alignItems:"top",justifyContent:"center"}} className="border-0 h-80 pt-2 row-span-10 flex justify-center">
              <div className='border-0 p-0 -my-1'>
              <TimelineDot sx={{scale:0.6,bgcolor:"#EA4335"}}></TimelineDot>
              </div>
              <TimelineConnector className="h-40 border-2 border-[#34A853]" sx={{bgcolor:'#34A853'}}/>
              <TimelineDot  className="border-0 flex items-center justify-center" sx={{bgcolor:"#34A853",width: 48, height: 58, padding:0.1}}>
                <img className='rounded-full' src = "mnnit_logo.jpg"  alt = "am"></img>
              </TimelineDot>
              <TimelineConnector className="h-40 border-2 border-[#34A853]" sx={{bgcolor:'#34A853'}}/>
          </TimelineSeparator>
        </div>
        <div className="grid col-span-3 border-0 border-red-500 justify-start">
          <TimelineContent className="" sx={{ py: '12px', px: 2,border:0 }}>
            <Typography style ={{fontFamily:"English Towne"}} className=" border-0 flex justify-center" variant="h6" component="div">
              <p className='text-3xl text-gray-300/80'>
                Bachelor's Degree 
              </p>
            </Typography>
            <Typography style = {{fontFamily:"initial"}}  className="border-0 grid text-center justify-center" component="span">
              NIT Allahabad<small style ={{fontFamily:"English Towne",}} className='text-lg'>⟨2020-24⟩</small>
            </Typography>
            <Typography className="border-0 text-center" >
              <div className='border-y-1 text-gray-300/80 font-serif'>
                Scored 7.31 ⟨<small className='text-xs italic'>out of</small> 10⟩ CPI
              </div>
              Completed my graduation from Computer Science Department in <span className='font-serif'>I.T.</span> Branch.
              In this Journey of 4 years, I became proficient Software Engineer, via great curricular academics,
               real-life skills, problem-solving, teamwork.
              </Typography>
          </TimelineContent>
        </div>
      </div>
    </div>
  )
}
{/* <Timeline sx={{margin:"auto auto"}} className="grid grid-rows-2 border-0 ">
      <div className="grid justify-center">
        <TimelineSeparator className="border-1 h-80 row-span-10">
            <TimelineConnector className="h-40" sx={{bgcolor:'success.main'}}/>
            <TimelineDot color = "success" className="flex items-center justify-center" sx={{ width: 48, height: 48 }}>
              <img src = "mail.svg"  alt = "am"></img>
            </TimelineDot>
            <TimelineConnector className="h-40" sx={{bgcolor:'success.main'}}/>
        </TimelineSeparator>
        <TimelineContent>

        </TimelineContent>
      </div>
      <div className="grid justify-center">
        <TimelineSeparator className="border-1 h-80 row-span-10">
            <TimelineConnector className="h-40" sx={{bgcolor:'success.main'}}/>
            <TimelineDot color = "success" className="flex items-center justify-center" sx={{ width: 48, height: 48 }}>
              <img src = "mail.svg"  alt = "am"></img>
            </TimelineDot>
            <TimelineConnector className="h-40" sx={{bgcolor:'success.main'}}/>
        </TimelineSeparator>
      </div>

</Timeline> */}

{/*
    <TimelineItem sx={{}} className="border-1 col-span-1 grid grid-cols-20">

    <TimelineSeparator  className="border-1 h-80 row-span-10">
      <TimelineConnector sx={{bgcolor:'success.main'}}/>
      <TimelineDot color = "success" className="flex items-center justify-center" sx={{ width: 48, height: 48 }}>
        <img src = "mail.svg"  alt = "am"></img>
      </TimelineDot>
      <TimelineConnector sx={{bgcolor:'success.main'}}/>
    </TimelineSeparator>

    <TimelineContent className=" row-span-10" sx={{ py: '12px', px: 2,border:4 }}>
      <Typography className="border-1" variant="h6" component="span">
        Code
      </Typography>
      <Typography className="border-1" >Because this is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>


  <TimelineItem className="col-span-20 border-1 grid-cols-20">

    
    <TimelineSeparator className="h-80 row-span-10 border-1">
      <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
      <TimelineDot color="secondary" sx={{ width:48 , height:48}}>
        <img className="rounded-full" src = "public/pfp6.jpg" />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>

    <TimelineContent className="row-span-10" sx={{ py: '12px', px: 2, border:4 }}>
      <Typography className="border-1" variant="h6" component="span">
        Repeat
      </Typography>
      <Typography className="border-1" >Because this is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>
*/}

export default TimelineAcad