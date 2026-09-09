export function generateWorkflowCronsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
