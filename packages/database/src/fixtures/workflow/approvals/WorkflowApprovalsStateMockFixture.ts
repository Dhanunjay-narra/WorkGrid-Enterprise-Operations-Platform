export function generateWorkflowApprovalsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
