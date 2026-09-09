export function generateProjectWorkspacesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
