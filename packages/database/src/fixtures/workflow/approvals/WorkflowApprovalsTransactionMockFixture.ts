export function generateWorkflowApprovalsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
