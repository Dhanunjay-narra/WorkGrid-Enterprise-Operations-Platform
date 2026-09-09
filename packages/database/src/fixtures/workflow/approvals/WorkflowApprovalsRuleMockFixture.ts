export function generateWorkflowApprovalsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
