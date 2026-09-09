export function generateWorkflowCronsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
