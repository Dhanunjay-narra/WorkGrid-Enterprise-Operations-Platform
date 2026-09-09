export function generateWorkflowVariablesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
