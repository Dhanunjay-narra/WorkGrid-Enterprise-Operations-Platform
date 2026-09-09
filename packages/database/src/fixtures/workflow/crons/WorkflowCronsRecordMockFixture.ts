export function generateWorkflowCronsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
