import { JobModel } from "../../localization/hooks/useJobHistory";
import { styled } from "../../../stitches.config";
import Duration from "./Duration";
import Keypoints from "./Keypoints";

type Props = {
    jobStartLabel:string;
    jobEndLabel:string;
    job:JobModel;
    techStackLabel:string;
    inRoleLabel:string;
}

export default function JobInfo({ jobStartLabel, jobEndLabel, job, techStackLabel, inRoleLabel }:Props) {
    return (
        <Wrapper>
            <TitleRow>
                <Title>{job.title}</Title>
                <Duration 
                    start={job.from} 
                    end={job.to} 
                    startLabel={jobStartLabel} 
                    endLabel={jobEndLabel} 
                />
            </TitleRow>
            <Company>{job.company}</Company>
            <Description>{job.description}</Description>
            <RoleLabel>{inRoleLabel}</RoleLabel>
            <Keypoints keypoints={job.keypoints} />
            <TechStack>{techStackLabel} {job.technologies}</TechStack>
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    color:"$dark",
    fontSize: "1.4rem",
    marginBottom: "5rem",
});

const TitleRow = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
});

const Title = styled("h2", {
    fontSize: "2.4rem",
    margin: "0",
    lineHeight: "1",
});

const Company = styled("p", {
    margin: "0",
    fontSize: "1.8rem",
    marginBottom: ".8rem",
});

const Description = styled("p", {
    margin: "0",
    marginBottom: "1.5rem",
});

const RoleLabel = styled("p", {
    margin: "0",
});

const TechStack = styled("p", {
    fontStyle: "italic",
    opacity: 0.75,
    margin: "0",

});

