export function generateWorkflowExecutionsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
