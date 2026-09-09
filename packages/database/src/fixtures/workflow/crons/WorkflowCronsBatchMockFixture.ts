export function generateWorkflowCronsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
