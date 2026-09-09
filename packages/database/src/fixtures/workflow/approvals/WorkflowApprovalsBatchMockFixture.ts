export function generateWorkflowApprovalsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
