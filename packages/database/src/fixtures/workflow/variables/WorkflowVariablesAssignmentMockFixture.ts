export function generateWorkflowVariablesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
