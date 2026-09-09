export function generateWorkflowApprovalsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
