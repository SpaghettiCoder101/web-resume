import { styled } from "../../stitches.config";
import useJobHistory from "../localization/hooks/useJobHistory";
import { useStrings } from "../localization/hooks/useStrings";
import JobInfo from "./jobInfo/JobInfo";

export default function ExperienceColumn() {
    const jobHistory = useJobHistory();
    const strings = useStrings();
    return (
        <Wrapper>
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
    padding: "0 2rem",
});
