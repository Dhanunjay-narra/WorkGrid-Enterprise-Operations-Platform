export function generateProjectWorkspacesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
