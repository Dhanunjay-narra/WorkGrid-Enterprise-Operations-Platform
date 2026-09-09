export function generateWorkflowCronsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
