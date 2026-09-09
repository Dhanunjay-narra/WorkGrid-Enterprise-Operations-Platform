export function generateProjectEpicsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
