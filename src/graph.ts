//adjacency list containing the statuses.This will help to find the next status
export const status_graph = {
  2: [3],
  3: [4],
  4: [5, 2],
  5: [2, 1],
  1: [2],
};
//an adjacency list containing transition and the statuses
export const graph = {
  RAS: [4, 5, 2],
  RPS: [3, 4, 2],
  SAS: [5, 1, 2],
  RUS: [2, 3, 4],
  SPS: [4, 2, 3],
  RPB: [3, 4, 5],
};

export const graph_transition = {
  2: ['RUS'],
  3: ['RPS', 'RPB'],
  4: ['RAS', 'SPS', 'RPS'],
  5: ['SAS'],
  1: ['SPS'],
};
