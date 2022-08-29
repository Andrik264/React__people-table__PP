import React, { useEffect, useState } from 'react';
import { Human, Child } from '../../types/human';
import { getPeople } from '../../api/people';

function findParents(people: Human[]): Child[] {
  return people.map(human => {
    const { motherName, fatherName } = human;

    return {
      ...human,
      mother: people.find(mother => motherName === mother.name),
      father: people.find(father => fatherName === father.name),
    };
  });
}

type ContextProps = {
  people: Human[],
  setPeople: (items: Human[]) => void,
};

export const PeopleContext = React.createContext<ContextProps>({
  people: [],
  setPeople: () => {},
});

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<Human[]>([]);

  useEffect(() => {
    getPeople()
      .then(newPeople => setPeople(findParents(newPeople)));
  }, []);

  const contextValue = {
    people,
    setPeople,
  };

  return (
    <PeopleContext.Provider value={contextValue}>
      {children}
    </PeopleContext.Provider>
  );
};
