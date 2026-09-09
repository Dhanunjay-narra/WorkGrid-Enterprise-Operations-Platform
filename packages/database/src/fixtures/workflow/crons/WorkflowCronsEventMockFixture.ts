export function generateWorkflowCronsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
