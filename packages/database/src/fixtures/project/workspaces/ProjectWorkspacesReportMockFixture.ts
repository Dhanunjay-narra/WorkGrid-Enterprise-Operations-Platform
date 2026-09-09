export function generateProjectWorkspacesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
