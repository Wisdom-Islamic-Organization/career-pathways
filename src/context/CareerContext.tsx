import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import careerPathwaysData, { Domain, Subdomain, EducationLevel } from '../data/careerPathways';

interface CareerContextType {
  domains: Domain[];
  selectedDomain: Domain | null;
  selectedSubdomain: Subdomain | null;
  selectedEducationLevel: EducationLevel | null;
  selectDomain: (domainId: string | null) => void;
  selectSubdomain: (subdomainId: string | null) => void;
  selectEducationLevel: (level: EducationLevel | null) => void;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider = ({ children }: { children: ReactNode }) => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedSubdomain, setSelectedSubdomain] = useState<Subdomain | null>(null);
  const [selectedEducationLevel, setSelectedEducationLevel] = useState<EducationLevel | null>(null);

  useEffect(() => {
    setDomains(careerPathwaysData.domains);
  }, []);

  const selectDomain = (domainId: string | null) => {
    if (!domainId) {
      setSelectedDomain(null);
      setSelectedSubdomain(null);
      setSelectedEducationLevel(null);
      return;
    }

    const domain = domains.find(d => d.id === domainId) || null;
    setSelectedDomain(domain);
    setSelectedSubdomain(null);
    setSelectedEducationLevel(null);
  };

  const selectSubdomain = (subdomainId: string | null) => {
    if (!subdomainId || !selectedDomain) {
      setSelectedSubdomain(null);
      setSelectedEducationLevel(null);
      return;
    }

    const subdomain = selectedDomain.subdomains.find(s => s.id === subdomainId) || null;
    setSelectedSubdomain(subdomain);
    setSelectedEducationLevel(null);
  };

  const selectEducationLevel = (level: EducationLevel | null) => {
    setSelectedEducationLevel(level);
  };

  return (
    <CareerContext.Provider
      value={{
        domains,
        selectedDomain,
        selectedSubdomain,
        selectedEducationLevel,
        selectDomain,
        selectSubdomain,
        selectEducationLevel
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = (): CareerContextType => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
}; 