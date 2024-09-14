import React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  const teamMembers = [
    { name: 'Hrithik Hinduja', role: 'Chief Executive Officer' , ImageAlt: 'Hritik Hinduja - Chief Executive Officer' },
    { name: 'Anita Sharma', role: 'COO', ImageAlt: 'Anita Sharma- COO' },
    { name: 'Vikram Singh', role: 'Head Of Marketing', ImageAlt: 'Vikram Singh  - Head Of Marketing' },

  ];

  return (
    <div  id="team"className="flex overflow-hidden flex-col items-center py-16 pr-24 pl-24 w-full bg-slate-50 min-h-[730px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-3 pb-16 w-full font-bold text-center max-w-[1320px] max-md:max-w-full">
        <div className="self-center px-5 py-2 text-sm tracking-wider leading-tight uppercase whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-[50px] text-zinc-500">Team</div>
        <div className="pr-96 pl-96 mt-2.5 w-full text-3xl leading-10 text-neutral-800 max-md:px-5 max-md:max-w-full">
          Our Hardworking <span className="text-black">Team</span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          {teamMembers.map(member => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
             
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;