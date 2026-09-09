export function generateProjectEpicsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
