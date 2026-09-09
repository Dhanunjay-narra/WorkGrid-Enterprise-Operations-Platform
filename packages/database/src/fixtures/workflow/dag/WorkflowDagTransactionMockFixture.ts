export function generateWorkflowDagTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
