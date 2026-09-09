export function generateWorkflowEdgesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
