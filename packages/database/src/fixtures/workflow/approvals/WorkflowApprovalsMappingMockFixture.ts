export function generateWorkflowApprovalsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
