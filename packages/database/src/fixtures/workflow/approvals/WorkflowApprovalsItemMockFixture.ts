export function generateWorkflowApprovalsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
