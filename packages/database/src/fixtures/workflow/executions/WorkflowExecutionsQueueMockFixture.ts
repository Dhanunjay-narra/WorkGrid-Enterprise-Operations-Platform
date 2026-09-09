export function generateWorkflowExecutionsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
