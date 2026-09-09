export function generateProjectEpicsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
