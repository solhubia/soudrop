import { useRef } from 'react';

export function useTracking() {
  const trackedEvents = useRef<Set<string>>(new Set());

  const trackEventOnce = (eventName: string, callback: () => void) => {
    if (!trackedEvents.current.has(eventName)) {
      trackedEvents.current.add(eventName);
      callback();
    }
  };

  const executeWithTracking = (eventName: string, trackingCallback: () => void, actionCallback: () => void) => {
    // Sempre executa a ação (scroll)
    actionCallback();
    
    // Executa o tracking apenas uma vez
    trackEventOnce(eventName, trackingCallback);
  };

  return { trackEventOnce, executeWithTracking };
}