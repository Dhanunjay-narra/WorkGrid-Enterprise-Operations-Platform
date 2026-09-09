export function generateWorkflowRetriesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
