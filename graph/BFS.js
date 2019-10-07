/**
 * @param n Number of vertices
 * @param edges Array of pairs of edges to add to graph
 * @param start
 * @returns Array of distances from start edge to each edge
 * Problem I implemented it at https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem
 */
function bfs(n, edges, start) {
    const result ={};
    const graph = {};
    const EDGE_DISTANCE = 1;
    // Not necessary, can also check whethre result[i] = -1
    // const visited = new Set();

    for (let i = 1; i <=n; i++) {
        graph[i] = [];
        result[i] = -1;
    }

    edges.forEach(pair=>{
        graph[Number(pair[0])].push(Number(pair[1]));
        graph[Number(pair[1])].push(Number(pair[0]));
    });

    const queue = [[start, 0]];
    result[start] = 0;

    while (queue.length) {
        let cur = queue.shift();
        result[cur[0]] = cur[1];
        graph[cur[0]].forEach(el => {
            if (result[el] === -1) {
                queue.push([el, cur[1] + EDGE_DISTANCE]);
                result[el] = cur[1] + EDGE_DISTANCE;
            }
        });
    }

    return Object.keys(result)
    // Double equal because we are comparing number to object key, which is a string
        .filter(key=> key != start)
        .map(key=> result[key])
}
