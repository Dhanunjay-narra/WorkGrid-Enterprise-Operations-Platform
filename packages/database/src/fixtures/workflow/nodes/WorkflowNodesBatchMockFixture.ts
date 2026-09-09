export function generateWorkflowNodesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
