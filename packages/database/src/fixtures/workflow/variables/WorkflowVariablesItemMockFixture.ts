export function generateWorkflowVariablesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
