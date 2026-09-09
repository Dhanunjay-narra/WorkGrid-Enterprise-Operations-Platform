export function generateProjectWorkspacesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
