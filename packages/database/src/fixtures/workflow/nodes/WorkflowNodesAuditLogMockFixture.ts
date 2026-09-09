export function generateWorkflowNodesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
