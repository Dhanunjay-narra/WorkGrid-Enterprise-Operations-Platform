export function generateProjectEpicsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
