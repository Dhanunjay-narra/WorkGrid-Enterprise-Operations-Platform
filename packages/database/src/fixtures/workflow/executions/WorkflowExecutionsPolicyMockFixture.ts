export function generateWorkflowExecutionsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
