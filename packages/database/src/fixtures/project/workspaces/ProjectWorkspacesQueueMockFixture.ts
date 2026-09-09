export function generateProjectWorkspacesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
