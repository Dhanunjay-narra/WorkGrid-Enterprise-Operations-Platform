export function generateWorkflowVariablesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
