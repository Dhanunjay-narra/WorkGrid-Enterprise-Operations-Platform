export function generateWorkflowEdgesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
