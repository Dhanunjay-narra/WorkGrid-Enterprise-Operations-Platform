export function generateWorkflowExecutionsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
