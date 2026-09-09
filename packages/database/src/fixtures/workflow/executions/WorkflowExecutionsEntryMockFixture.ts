export function generateWorkflowExecutionsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
