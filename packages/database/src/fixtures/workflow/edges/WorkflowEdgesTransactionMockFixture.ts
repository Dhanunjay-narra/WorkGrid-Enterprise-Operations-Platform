export function generateWorkflowEdgesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
