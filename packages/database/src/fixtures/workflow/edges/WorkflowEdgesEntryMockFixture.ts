export function generateWorkflowEdgesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
