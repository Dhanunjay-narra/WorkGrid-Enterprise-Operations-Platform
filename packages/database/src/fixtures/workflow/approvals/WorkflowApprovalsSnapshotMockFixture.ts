export function generateWorkflowApprovalsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
