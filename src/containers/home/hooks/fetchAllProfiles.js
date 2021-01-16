import React, {useState, useEffect} from "react";

import {fetchApi} from "../../utility/fetchApi";

const useFetchAllProfiles = () => {
    const fetchUrl = "https://api.enye.tech/v1/challenge/records";
    const [result, setResult] = useState([]);
    useEffect(() => {
        (async () => {
            const {isError, data, errorMessage} = await fetchApi({}, "GET", fetchUrl);

            if (isError) {
                // console.log("error", errorMessage);
                // return errorMessage;
                setResult(errorMessage);
            } else {
                const profiles = data.records.profiles;
                const noOfProfiles = data.records.size;
                // console.log("data", profiles)
                // setAllProfiles(profiles);
                // setHidePreloader(false);
                // return profiles;
                setResult(profiles);
            }
        })();
    }, []);
    return result
}

export default useFetchAllProfiles;
// module.exports = useFetchAllProfiles;
