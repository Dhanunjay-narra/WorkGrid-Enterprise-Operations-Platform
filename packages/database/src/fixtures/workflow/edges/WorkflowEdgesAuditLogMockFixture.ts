export function generateWorkflowEdgesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
