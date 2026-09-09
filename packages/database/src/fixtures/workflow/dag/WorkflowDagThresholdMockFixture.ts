export function generateWorkflowDagThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
