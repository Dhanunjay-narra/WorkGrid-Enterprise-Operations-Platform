export function generateWorkflowNodesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
