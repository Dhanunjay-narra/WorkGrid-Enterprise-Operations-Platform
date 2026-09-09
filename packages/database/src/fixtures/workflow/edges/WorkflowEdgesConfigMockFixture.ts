export function generateWorkflowEdgesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
