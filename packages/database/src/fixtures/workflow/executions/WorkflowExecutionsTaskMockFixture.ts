export function generateWorkflowExecutionsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
