export function generateWorkflowExecutionsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
