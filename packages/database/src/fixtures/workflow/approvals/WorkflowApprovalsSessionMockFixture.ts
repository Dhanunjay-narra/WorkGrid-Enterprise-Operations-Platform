export function generateWorkflowApprovalsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
