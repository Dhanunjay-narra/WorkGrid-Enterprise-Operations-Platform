export function generateWorkflowApprovalsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
