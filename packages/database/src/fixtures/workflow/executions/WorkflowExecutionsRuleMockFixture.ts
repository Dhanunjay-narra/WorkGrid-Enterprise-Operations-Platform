export function generateWorkflowExecutionsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
