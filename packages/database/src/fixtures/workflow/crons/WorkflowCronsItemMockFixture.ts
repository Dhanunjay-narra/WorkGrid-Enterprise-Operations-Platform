export function generateWorkflowCronsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
