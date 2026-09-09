export function generateWorkflowEdgesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
