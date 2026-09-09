export function generateWorkflowCronsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
