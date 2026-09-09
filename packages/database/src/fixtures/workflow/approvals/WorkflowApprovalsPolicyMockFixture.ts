export function generateWorkflowApprovalsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
