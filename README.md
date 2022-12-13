## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Approach:

I created several adjacency lists in graph.ts file:
  - graph -> This has the transitions as keys and the bulk status i.e the arch
  - status_graph -> This is a representation of how the nodes in the graphs
  - graph_transition -> this contains the nodes and the transition.

When given a transition in the form of an array, I convert it into a string and check if it exists in the graph adjacency list.
Then I check the values of that transition in the graph, and I select the last element in the values. Then I use the element to check the status graph for its neighbor, which will be the next status.

for example : given a transition ["R","A","S"] i convert this to RAS and check for its value which is [4,5,2].
Then I take the last element, which in this case is 2, and use it to find the next node in the status graph, which will be 3 which is the next status.  

### Sorry for not having enough time for this project, but there are numerous improvements that can be made.