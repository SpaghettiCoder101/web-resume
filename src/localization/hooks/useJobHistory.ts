import { LocalizationKey } from "../Localization";
import { useStrings } from "./useStrings";

export type JobModel = {
    title: string;
    from: string;
    to: string;
    company: string;
    description: string;
    keypoints: string;
    technologies: string;
};

export default function useJobHistory(): JobModel[] {
    const strings = useStrings();
    const jobKeys = Object.keys(strings)
        .filter(key => key.startsWith("job_"))
        .map(key => key.split("$")[0]);

    const uniqueKeys = [...new Set(jobKeys)];

    const jobs: JobModel[] = uniqueKeys.map(key => {
        return {
            title : strings[`${key}$title` as LocalizationKey],
            from: strings[`${key}$from` as LocalizationKey],
            to: strings[`${key}$to` as LocalizationKey],
            company: strings[`${key}$company` as LocalizationKey],
            description: strings[`${key}$description` as LocalizationKey],
            keypoints: strings[`${key}$keypoints` as LocalizationKey],
            technologies: strings[`${key}$technologies` as LocalizationKey],
        };
    });

    return jobs;
}
        

