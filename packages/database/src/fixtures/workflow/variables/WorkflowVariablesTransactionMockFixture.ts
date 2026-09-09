export function generateWorkflowVariablesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
