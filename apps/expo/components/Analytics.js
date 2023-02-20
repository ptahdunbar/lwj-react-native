import { usePathname, useSearchParams } from "expo-router";
import newrelic from 'newrelic-react-native-agent';
import { useEffect } from "react";
import Logger from './Logger';

export default () => {
  const pathname = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    newrelic.recordBreadcrumb('navigation', { pathname, params });
    
    // Example of sending logs to new relic
    Logger.info('navigation', { pathname, params });
  }, [pathname, params]);
  return null;
}