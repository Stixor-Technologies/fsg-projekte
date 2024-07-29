import React, { FC } from "react";

interface ProjectPhaseProps {
  projectPhases: any[];
  currentPhase: number;
}

const ProjectPhase: FC<ProjectPhaseProps> = ({
  projectPhases,
  currentPhase,
}) => {
  return (
    <div className="mx-auto mb-[2.813rem] max-w-[95.125rem] lg:mb-[6.625rem] 4xl:h-[8.188rem]">
      <div className="flex items-center">
        <div className="flex w-full flex-1 flex-col md:flex-row">
          {projectPhases?.map((phase: any, index: number) => (
            <div
              key={index}
              className="flex flex-1 gap-12 md:flex-col md:gap-5 xl:gap-[1.625rem]"
            >
              <div className={`flex flex-col items-center md:flex-row `}>
                <div
                  className={`${index === 0 && "hidden size-2 shrink-0 rounded-full bg-silver md:block"}`}
                />

                <div
                  className={`-ml-[0.031rem] hidden h-px w-full  bg-silver md:block`}
                />

                <div
                  className={`group relative flex size-14 shrink-0 items-center justify-center rounded-full font-gt-book text-3xl  leading-none xl:size-20 xl:text-[3.125rem]   ${currentPhase >= phase.phaseNumber ? "bg-medium-blue text-white" : "border border-silver text-silver"} `}
                >
                  <span className="-mt-2">{index + 1}</span>
                </div>

                <div
                  className={`-ml-[0.031rem] h-14 w-px bg-silver md:h-px md:w-full ${index === projectPhases?.length - 1 && "hidden md:block"}`}
                />

                <div
                  className={`${index === projectPhases?.length - 1 && "hidden size-2 shrink-0 rounded-full bg-silver md:block"}`}
                />
              </div>

              <span
                className={`mt-4 self-start text-sm uppercase md:mt-0 md:self-center xl:text-[1.3125rem] ${currentPhase >= phase?.phaseNumber ? " text-medium-blue" : "text-silver"}`}
              >
                {phase?.phaseName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPhase;
