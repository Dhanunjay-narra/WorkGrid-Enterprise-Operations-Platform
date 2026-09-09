export function generateWorkflowVariablesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
