export function generateWorkflowEdgesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
