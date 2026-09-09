export function generateWorkflowExecutionsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
