export function generateWorkflowCronsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
