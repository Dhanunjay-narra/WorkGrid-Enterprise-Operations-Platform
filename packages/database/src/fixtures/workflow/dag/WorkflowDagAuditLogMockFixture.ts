export function generateWorkflowDagAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
