export function generateWorkflowApprovalsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
