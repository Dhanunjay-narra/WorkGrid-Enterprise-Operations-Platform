export function generateWorkflowApprovalsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
