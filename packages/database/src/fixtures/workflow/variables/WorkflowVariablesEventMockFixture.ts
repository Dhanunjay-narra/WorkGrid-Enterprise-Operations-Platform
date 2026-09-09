export function generateWorkflowVariablesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
