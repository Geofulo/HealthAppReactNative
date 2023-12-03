import { useEffect, useState } from 'react';
import { Platform, NativeModules } from 'react-native';

const useHealthData = () => {
    const [steps, setSteps] = useState(0);
    const [hasPermissions, setHasPermissions] = useState(false);

    const { MyHealthKitService } = NativeModules;

    useEffect(() => {
        if (Platform.OS !== 'ios') { 
            return;
        }

        MyHealthKitService.requestPermissions().then((status: any) => {
            setHasPermissions(status);
        }, (err: any) => {
            console.log("Error: " + err);
            setHasPermissions(false);
        });
    }, [])

    useEffect(() => {
      if (!hasPermissions) {
        return;
      }
    
      MyHealthKitService.fetchSteps().then((steps: any) => {
        setSteps(steps);
      }, (err: any) => {
        console.log("Error: " + err);
        setSteps(0);
      });
    }, [hasPermissions])
    

    return { steps }
}

export default useHealthData;