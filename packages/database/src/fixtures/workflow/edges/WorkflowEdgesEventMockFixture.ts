export function generateWorkflowEdgesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
