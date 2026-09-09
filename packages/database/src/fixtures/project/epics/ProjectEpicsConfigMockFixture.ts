export function generateProjectEpicsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
