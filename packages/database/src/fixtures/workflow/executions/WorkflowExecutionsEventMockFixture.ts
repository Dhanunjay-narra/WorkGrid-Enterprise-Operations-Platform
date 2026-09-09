export function generateWorkflowExecutionsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
