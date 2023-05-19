import React from 'react'

const FinMSMEhelps = () => {

const Counts=[


{
    countable:'42300',
    title:'Loans Disbursed'
},

{
    countable:'360',
    title:'Cities Served'
},

{
    countable:'72',
    title:'Active Partners'
},

{
    countable:'10',
    title:'Industries Served'
},



]



return(
  <>
<div id='font'>
    <div className=' ' style={{backgroundColor: '#5920C5'}}>
      <h2 className='fw-bold text-center text-white pt-5' style={{paddingBottom:'150px'}}> FinMSME HELPS BUSINESSES THRIVE</h2>
    </div>

    <div className='container d-flex business-thrive '>
{Counts.map((count,main)=>{
    
  return (
    
 
   
     
      <div className="card shadow p-4 text-center bus-thir " key={(main)} style={{marginTop:'-80px', borderRadius:'20px', borderLeftWidth:'10px',borderTopWidth:'0px',borderRightWidth:'0px',borderBottomWidth:'0px',borderColor:'#198754'}}>
       
            <h2 className="busni-thiri fw-bold">{count.countable}</h2>
            <h5 className="busni-thiri ">{count.title}</h5> 
    
      </div>

    
  


    
   
    
  );
  
})}
</div>

  </div>
  </>
);
  }
export default FinMSMEhelps