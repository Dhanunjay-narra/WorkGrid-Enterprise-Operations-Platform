export function generateWorkflowVariablesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
