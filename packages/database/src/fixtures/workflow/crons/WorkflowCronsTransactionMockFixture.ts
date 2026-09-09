export function generateWorkflowCronsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
