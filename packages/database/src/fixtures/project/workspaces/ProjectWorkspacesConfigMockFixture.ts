export function generateProjectWorkspacesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
