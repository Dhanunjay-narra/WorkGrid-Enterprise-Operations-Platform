export function generateWorkflowCronsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
