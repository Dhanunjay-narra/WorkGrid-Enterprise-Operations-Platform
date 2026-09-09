export function generateWorkflowApprovalsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
