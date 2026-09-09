export function generateWorkflowNodesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
