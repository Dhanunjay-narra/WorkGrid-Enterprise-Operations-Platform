export function generateWorkflowVariablesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
