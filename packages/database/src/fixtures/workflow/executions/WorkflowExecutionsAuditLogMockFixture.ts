export function generateWorkflowExecutionsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
