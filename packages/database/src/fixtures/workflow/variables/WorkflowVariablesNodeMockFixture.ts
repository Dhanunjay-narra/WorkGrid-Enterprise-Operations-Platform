export function generateWorkflowVariablesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
