export function generateWorkflowCronsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
