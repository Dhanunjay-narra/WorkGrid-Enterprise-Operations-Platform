export function generateWorkflowApprovalsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
