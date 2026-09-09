export function generateWorkflowApprovalsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
