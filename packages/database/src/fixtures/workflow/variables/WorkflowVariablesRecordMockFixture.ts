export function generateWorkflowVariablesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
