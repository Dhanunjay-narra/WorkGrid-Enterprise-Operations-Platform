export function generateWorkflowEdgesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
