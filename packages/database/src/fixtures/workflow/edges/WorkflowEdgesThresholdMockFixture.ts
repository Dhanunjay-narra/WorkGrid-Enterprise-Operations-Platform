export function generateWorkflowEdgesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
