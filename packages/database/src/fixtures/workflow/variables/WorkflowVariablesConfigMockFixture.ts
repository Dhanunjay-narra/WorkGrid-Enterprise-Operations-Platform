export function generateWorkflowVariablesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
