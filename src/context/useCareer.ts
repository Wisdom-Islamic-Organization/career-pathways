import { useContext } from 'react';
import { CareerContext, CareerContextType } from './CareerContext';

export const useCareer = (): CareerContextType => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
}; 