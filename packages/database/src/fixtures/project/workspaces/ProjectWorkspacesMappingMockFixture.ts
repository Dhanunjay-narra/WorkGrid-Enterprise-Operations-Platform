export function generateProjectWorkspacesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
