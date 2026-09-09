export function generateWorkflowCronsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
