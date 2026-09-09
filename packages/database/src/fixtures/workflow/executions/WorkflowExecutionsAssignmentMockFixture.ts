export function generateWorkflowExecutionsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
