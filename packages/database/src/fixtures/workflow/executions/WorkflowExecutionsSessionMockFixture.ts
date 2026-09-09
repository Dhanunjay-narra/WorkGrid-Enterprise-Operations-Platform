export function generateWorkflowExecutionsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
