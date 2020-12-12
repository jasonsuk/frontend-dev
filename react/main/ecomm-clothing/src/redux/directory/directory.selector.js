import { createSelector } from 'reselect';

// Get directory reducer from state
const selectDirectory = (state) => state.directory; // @root.reducer

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);
