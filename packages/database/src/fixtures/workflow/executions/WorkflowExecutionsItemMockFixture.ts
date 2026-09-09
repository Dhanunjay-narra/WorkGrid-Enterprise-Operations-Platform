export function generateWorkflowExecutionsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
