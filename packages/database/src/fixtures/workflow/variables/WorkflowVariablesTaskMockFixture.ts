export function generateWorkflowVariablesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
