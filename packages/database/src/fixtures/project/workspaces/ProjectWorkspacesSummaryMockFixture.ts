export function generateProjectWorkspacesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
