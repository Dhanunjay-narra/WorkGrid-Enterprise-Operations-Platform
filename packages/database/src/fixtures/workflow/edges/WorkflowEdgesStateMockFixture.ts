export function generateWorkflowEdgesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
