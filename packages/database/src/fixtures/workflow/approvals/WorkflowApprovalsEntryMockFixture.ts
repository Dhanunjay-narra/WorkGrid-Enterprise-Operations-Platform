export function generateWorkflowApprovalsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
