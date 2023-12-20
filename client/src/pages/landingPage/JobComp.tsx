import React from 'react'
import {BiTimeFive} from "react-icons/bi"
import lyfecareLogo from "../../assets/lyfecareLogo.jpg"
import { jobData } from '../../interface/interface'

const data: jobData[] = [
    {
      id: 1,
      image: lyfecareLogo,
      title: 'Web Developer',
      time: 'Now',
      location: 'Nigeria',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'LyfeCare'
    },
    
    {
      id: 2,
      image: lyfecareLogo,
      title: 'UI/UX Engineer',
      time: 'Now',
      location: 'Ghana',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'EcoBin'
    },

    {
      id: 3,
      image: lyfecareLogo,
      title: 'BackEnd Engineer',
      time: '2days',
      location: 'Sudan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'EasyHr'
    },

    {
      id: 4,
      image: lyfecareLogo,
      title: 'Front End Engineer',
      time: '14hrs',
      location: 'Nigeria',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'LucThad Enterprise'
    },
    {
      id: 5,
      image: lyfecareLogo,
      title: 'Data Analyst',
      time: '3days',
      location: 'Nigeria',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'Phoenix'
    },
    
    {
      id: 6,
      image: lyfecareLogo,
      title: 'React Developer',
      time: 'Now',
      location: 'Oregie',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'Code Crusaders'
    },

    {
      id: 7,
      image: lyfecareLogo,
      title: 'BackEnd Engineer',
      time: '2days',
      location: 'Amukoko',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'Mavericks'
    },

    {
      id: 8,
      image: lyfecareLogo,
      title: 'Node Developer',
      time: '2hrs',
      location: 'Ajegunle',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias sit doloremque suscipit consequu',
      company: 'Alajo online'
    },
  ]

  const JobComp: React.FC = () => {
    return (
      <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

          {
            data.map((props)=>(
              <div key={props?.id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{props?.title}</h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {props?.time}
                </span>
                <h6 className="text-[#ccc]">{props?.location}</h6>
              </span>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {props?.desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={lyfecareLogo} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{props.company}</span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                Apply Now
              </button>
            </div>
            ))
          }
            
          {/* {data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {time}
                  </span>
                  <h6 className="text-[#ccc]">{location}</h6>
                </span>
                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {desc}
                </p>
                <div className="company flex items-center gap-2">
                  <img src={lyfecareLogo} alt="Company Logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                </div>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                  Apply Now
                </button>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  };
  
  export default JobComp;