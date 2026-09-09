export function generateWorkflowEdgesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
