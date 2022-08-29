import './PeoplePage.scss';
import React, {
  useState,
  useCallback,
  useContext,
} from 'react';
import {
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import debounce from 'lodash/debounce';
import { PeopleContext } from '../PeopleContext';

import { QueryParams, SortBy, SortOrder } from '../../types/queryParams';

import { PeopleTable } from '../PeopleTable';
import { CreateNewUserModal } from '../CreateNewUserModal';

const compareStrings = (a: string, b: string) => a.localeCompare(b);

export const PeoplePage: React.FC = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || '';
  const [queryParams, setQueryParams] = useState<QueryParams>({
    query,
    sortBy,
    sortOrder,
  });
  const { people } = useContext(PeopleContext);
  const [isCreateUserModalActive, setIsCreateUserModalActive] = useState(false);

  const ModalActions = {
    open: () => setIsCreateUserModalActive(true),
    close: () => setIsCreateUserModalActive(false),
  };

  const filteredPeople = people
    .filter(human => human.name.toLowerCase().includes(query)
      || human.motherName?.toLowerCase().includes(query)
      || human.fatherName?.toLowerCase().includes(query));

  const sortPeople = useCallback(() => {
    if (!sortBy) {
      return filteredPeople;
    }

    return [...filteredPeople].sort((p1, p2): number => {
      switch (sortBy) {
        case SortBy.Name:
        case SortBy.Sex:
          return sortOrder === SortOrder.asc
            ? compareStrings(p1[sortBy], p2[sortBy])
            : compareStrings(p2[sortBy], p1[sortBy]);

        case SortBy.Born:
        case SortBy.Died:
          return sortOrder === SortOrder.asc
            ? p1[sortBy] - p2[sortBy]
            : p2[sortBy] - p1[sortBy];

        default:
          return 0;
      }
    });
  }, [filteredPeople, sortBy, sortOrder]);

  const updateSearchParams = useCallback(
    (newQuery: QueryParams) => {
      const entries = Object.entries(newQuery);

      entries.forEach(
        ([queryName, value]) => (value
          ? searchParams.set(queryName, value)
          : searchParams.delete(queryName)
        ),
      );

      setSearchParams(searchParams);
    }, [pathname],
  );

  const applyQueryWithDebounce = useCallback(
    debounce((newQuery: QueryParams) => {
      updateSearchParams(newQuery);
    }, 500),
    [pathname],
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value = '' } } = event;
    const newQuery = { ...queryParams, [name]: value.toLowerCase() };

    setQueryParams(newQuery);
    applyQueryWithDebounce(newQuery);
  };

  const handleSortChange = useCallback((newSortByValue: SortBy) => {
    const newQuery = {
      ...queryParams,
      sortBy: newSortByValue.toLowerCase(),
    };

    if (newSortByValue !== queryParams.sortBy) {
      newQuery.sortOrder = SortOrder.asc;
    } else {
      switch (queryParams.sortOrder) {
        case SortOrder.asc:
          newQuery.sortOrder = SortOrder.desc;
          break;

        case SortOrder.desc:
          newQuery.sortOrder = SortOrder.asc;
          break;

        default:
          newQuery.sortOrder = '';
          break;
      }
    }

    setQueryParams(newQuery);
    updateSearchParams(newQuery);
  }, [queryParams]);

  return (
    <>
      <div className="people-page">
        <div className="people-page__container">
          <div className="people-page__tools">
            <div className="people-page__tools__filter">
              <input
                className="input is-normal is-rounded"
                data-cy="filterInput"
                name="query"
                placeholder="Person Name"
                value={queryParams.query}
                onChange={handleFilterChange}
              />
            </div>

            <div className="people-page__tools__create-new-user">
              <button
                className="button is-success is-light"
                type="button"
                onClick={ModalActions.open}
              >
                Create New Person
              </button>
            </div>
          </div>

          <div className="people-page__table-container">
            {people.length ? (
              <PeopleTable
                sortPeople={handleSortChange}
                people={sortPeople()}
              />
            ) : <h1>There is nobody :/</h1> }
          </div>

          {isCreateUserModalActive
            && <CreateNewUserModal onClose={ModalActions.close} />}
        </div>
      </div>
    </>
  );
};
