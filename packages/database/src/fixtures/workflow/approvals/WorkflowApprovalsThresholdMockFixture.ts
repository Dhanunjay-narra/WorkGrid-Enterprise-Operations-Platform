export function generateWorkflowApprovalsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
