import { styled } from "../../stitches.config";
import useJobHistory from "../localization/hooks/useJobHistory";
import { useStrings } from "../localization/hooks/useStrings";
import JobInfo from "./jobInfo/JobInfo";

export default function ExperienceColumn() {
    const jobHistory = useJobHistory();
    const strings = useStrings();
    return (
        <Wrapper>
            <Experience>
                {strings.common$experience}
            </Experience>

            {jobHistory.map((job, index) => (
                <JobInfo 
                    key={index} 
                    job={job} 
                    jobStartLabel={strings.common$from}
                    jobEndLabel={strings.common$to}
                    techStackLabel={strings.common$technologies}
                    inRoleLabel={strings.common$inRole}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    padding: "4rem 2rem",
});

const Experience = styled("h2", {
    backgroundColor: "$accent",
    padding: "1rem 2rem",
    color: "$dark",
    fontSize: "3rem",
    textTransform: "uppercase",
    margin: "0",
    marginBottom: "5rem",
});