export function generateProjectWorkspacesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
