import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../models/store-types';

const selectGraphqlState = (state: RootState) => state['graphql-slice'];

export const selectGraphqlData = createSelector(
  [selectGraphqlState],
  graphqlState => ({
    headers: graphqlState.headers,
  })
);
