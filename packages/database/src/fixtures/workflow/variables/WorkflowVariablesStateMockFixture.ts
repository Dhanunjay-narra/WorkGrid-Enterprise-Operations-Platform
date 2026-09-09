export function generateWorkflowVariablesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
