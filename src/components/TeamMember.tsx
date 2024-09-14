import React from 'react';

type TeamMemberProps = {
  name: string;
  role: string;

};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center pt-6 basis-0 max-w-[1320px] min-w-[240px]">
      <div className="flex px-3 w-full min-h-[20px]">
        <div className="flex overflow-hidden flex-col flex-1 shrink w-full bg-white rounded-md basis-0 min-w-[240px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
          <div className="flex overflow-hidden flex-col justify-center w-full">
      
          </div>
          <div className="flex flex-col px-4 py-6 w-full text-center">
            <div className="pr-20 pl-20 w-full text-lg font-bold leading-6 text-black text-opacity-80 max-md:px-5">{name}</div>
            <div className="px-20 pb-px mt-1 w-full text-sm leading-5 text-neutral-700 text-opacity-60 max-md:px-5">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;