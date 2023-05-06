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
<div id='font'>
    <div className=' ' style={{backgroundColor: '#5920C5'}}>
      <h2 className='fw-bold text-center text-white pt-5' style={{paddingBottom:'150px'}}> FinMSME HELPS BUSINESSES THRIVE</h2>
    </div>

    <div className='container d-flex  justify-content-between'>
{Counts.map((count,main)=>{
    
  return (
    <>
 
    <div key={(main)}>
     
      <div className="card shadow p-4 text-center " style={{width: '16rem',marginTop:'-80px', borderRadius:'20px', borderLeftWidth:'10px',borderTopWidth:'0px',borderRightWidth:'0px',borderBottomWidth:'0px',borderColor:'#198754'}}>
        <div className="card-body">
            <h2 className="card-title fw-bold">{count.countable}</h2>
            <h5 className="card-text">{count.title}</h5> 
        </div>
      </div>

    </div>
  


      </>
   
    
  );
  
})}
</div>

  </div>

);
  }
export default FinMSMEhelps