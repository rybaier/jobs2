
//This is for being able to access easy navigation options and the navigate prop from react  
// accessed by using createNavigationContainerRef and adding as a ref prop in navigation container
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}