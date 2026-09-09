import { WorkflowNode, WorkflowDefinition } from '@nexora/types';

export class DAGResolver {
  public resolveExecutionOrder(workflow: WorkflowDefinition): WorkflowNode[] {
    const inDegree = new Map<string, number>();
    const adjList = new Map<string, string[]>();
    const nodeMap = new Map<string, WorkflowNode>();

    workflow.nodes.forEach(n => {
      nodeMap.set(n.id, n);
      inDegree.set(n.id, 0);
      adjList.set(n.id, []);
    });

    workflow.edges.forEach(e => {
      adjList.get(e.from)?.push(e.to);
      inDegree.set(e.to, (inDegree.get(e.to) || 0) + 1);
    });

    const queue: string[] = [];
    inDegree.forEach((degree, id) => {
      if (degree === 0) queue.push(id);
    });

    const ordered: WorkflowNode[] = [];
    while (queue.length > 0) {
      const currentId = queue.shift()!;
      const node = nodeMap.get(currentId);
      if (node) ordered.push(node);

      (adjList.get(currentId) || []).forEach(neighbor => {
        const nextDegree = (inDegree.get(neighbor) || 0) - 1;
        inDegree.set(neighbor, nextDegree);
        if (nextDegree === 0) queue.push(neighbor);
      });
    }

    if (ordered.length !== workflow.nodes.length) {
      throw new Error('Cyclic dependency detected in workflow definition graph');
    }

    return ordered;
  }
}
