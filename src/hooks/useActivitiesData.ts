import { useEffect, useState } from 'react';

type Activity = {
    id: string,
    activity: string,
    metValue: string,
    description: string
    intensityLevel: Number
}

const useActivitiesData = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loadingActivities, setLoadingActivities] = useState(false);

    const url = "https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=9";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39ff363470msh7bf1df1809a5124p1be641jsnfe115a51bf24',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    useEffect(() => {
        setLoadingActivities(true);
        
        fetch(url, options)
        .then((res) => res.json())        
        .then((json) => json.data)        
        .then((data) => setActivities(data))
        .catch((error) => console.error(error))
        .finally(() => setLoadingActivities(false));
    }, [])
    
    return { activities, loadingActivities }
}

export default useActivitiesData;