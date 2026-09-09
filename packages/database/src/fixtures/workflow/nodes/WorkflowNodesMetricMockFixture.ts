export function generateWorkflowNodesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
