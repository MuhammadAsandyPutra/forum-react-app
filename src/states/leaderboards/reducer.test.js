/**
* test scenario for leaderboardsReducer
*
* - threadReducers function
*  - should return the initial state when given by unknown action
*  - should return the thread when given by RECEIVE_LEADERBOADS action

*/

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer', () => {
  it('should return the initial state when given by UNKNOWN action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });
});
