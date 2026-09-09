export function generateWorkflowEdgesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
