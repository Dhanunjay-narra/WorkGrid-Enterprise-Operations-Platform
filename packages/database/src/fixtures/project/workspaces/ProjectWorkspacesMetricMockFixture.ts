export function generateProjectWorkspacesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
