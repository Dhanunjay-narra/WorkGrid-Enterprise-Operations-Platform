export function generateWorkflowExecutionsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
