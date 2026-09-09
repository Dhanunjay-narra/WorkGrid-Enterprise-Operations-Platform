export function generateProjectWorkspacesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
