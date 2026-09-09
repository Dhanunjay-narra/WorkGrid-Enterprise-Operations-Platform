export function generateProjectWorkspacesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
