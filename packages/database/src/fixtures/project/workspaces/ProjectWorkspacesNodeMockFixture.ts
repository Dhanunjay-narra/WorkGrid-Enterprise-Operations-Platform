export function generateProjectWorkspacesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
