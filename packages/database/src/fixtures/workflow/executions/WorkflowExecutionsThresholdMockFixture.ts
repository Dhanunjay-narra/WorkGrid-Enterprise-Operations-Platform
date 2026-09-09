export function generateWorkflowExecutionsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
