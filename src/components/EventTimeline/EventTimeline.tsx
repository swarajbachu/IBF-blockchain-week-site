import Timeline from "./timeline";


export default function timer() {
    return (
      <div className="mt-2 h-screen pl-32">
          <div className="flex-col">
              <h2 className="text-left text-5xl font-semibold w-1/2 text-white">
              Timeline
              </h2>
              <div className="mt-9 mb-5 w-44 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>
              <p className="w-1/2 leading-8 text-white text-lg">
              Get a headstart into Blockchain. 
              The event features a complete Solidity bootcamp, Talks by Industry Experts, Smart Contract Compedition and Certifications. 
              Only 50 students will get be selected to attend this event.
              <br/><br/>  
              Explore the latest career developments and chart a course for your future blockchain journey.   
              </p>

              <Timeline></Timeline>
          </div>
      </div>
    )
  }
  