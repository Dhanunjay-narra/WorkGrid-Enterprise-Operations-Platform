export function generateProjectWorkspacesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
