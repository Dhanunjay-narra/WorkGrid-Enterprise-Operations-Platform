export function generateWorkflowVariablesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
