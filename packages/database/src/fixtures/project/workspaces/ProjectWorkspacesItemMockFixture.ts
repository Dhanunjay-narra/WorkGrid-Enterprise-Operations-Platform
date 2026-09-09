export function generateProjectWorkspacesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
