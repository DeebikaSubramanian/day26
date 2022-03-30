import './App.css';

import Pricechart from './Price';

function App() {
  var arr=[
    {
      plan:"free",
      rs:0,
      dur:"month",
      features:[
        {
          name:"Single User",
          mute:false,
          check:true
        },
        {
          name:"5GB Storage",
          mute:false,
          check:true

        },
        {
          name:"Unlimited Public Projects",
          mute:false,
          check:true
        },
        {
          name:"Community Access",
          mute:false,
          check:true
          
        },
        {
          name:"Unlimited Private Projects",
          mute:true,
          check:false
          
        },
        {
          name:"Dedicated Phone Support",
          mute:true,
          check:false
        },
        {
          name:"Free Subdomain",
          mute:true,
          check:false
        },
        {
          name:"Monthly Status Reports",
          mute:true,
          check:false
        }
      ],
      btn:"button"
        },
  
        {
          plan:"plus",
          rs:9,
          dur:"month",
          features:[
            {
              name:"5 Users",
              mute:false,
              bold:true,
              check:true
            },
            {
              name:"50GB Storage",
              mute:false,
              check:true
            },
            {
              name:"Unlimited Public Projects",
              mute:false,
              check:true

            },
            {
              name:"Community Access",
              mute:false,
              check:true
            },
            {
              name:"Unlimited Private Projects",
              mute:false,
              check:true
            },
            {
              name:"Dedicated Phone Support",
              mute:false,
              check:true
            },
            {
              name:" Free Subdomains",
              mute:false,
              check:true
            },
            {
              name:"Monthly Status Reports",
              mute:true,
              check:false
            }
          ],
          btn:"button"
          
        },
   
    {
      plan:"pro",
      rs:49,
      dur:"month",
      features:[
        {
          name:"Unlimited Users",
          mute:false,
          bold:true,
          check:true
        },
        {
          name:"150GB Storage",
          mute:false,
          check:true
        },
        {
          name:"Unlimited Public Projects",
          mute:false,
          bold:false,
          check:true
        },
        {
          name:"Community Access",
          mute:false,
          check:true
        },
        {
          
          name:"Unlimited Private Projects",
          mute:false,
          check:true
          },
        {
          name:"Dedicated Phone Support",
          mute:false,
          check:true
        },
        {
          na:"Unlimited",
          name:"Free Subdomains",
          mute:false,
          check:true
        },
        {
          name:"Monthly Status Reports",
          mute:false,
          check:true
        }
      ],
      btn:"button"
      
    }
  ]
  return (
         
<section className="pricing py-5">
  <div className="container">
    <div className="row">
          { arr.map((e)=>
     {
    return <Pricechart array={e}></Pricechart>
     })
       
}
     
     {/* <Pricechart2></Pricechart2>
     <Pricechart3></Pricechart3> */}
     </div>
     </div>
     </section>
     );
}

export default App;
