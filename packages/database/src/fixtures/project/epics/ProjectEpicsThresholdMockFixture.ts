export function generateProjectEpicsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
