export function generateProjectEpicsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
