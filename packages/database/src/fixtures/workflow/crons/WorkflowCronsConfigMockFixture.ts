export function generateWorkflowCronsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
