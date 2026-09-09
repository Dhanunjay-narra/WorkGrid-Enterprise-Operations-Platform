export function generateWorkflowExecutionsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
