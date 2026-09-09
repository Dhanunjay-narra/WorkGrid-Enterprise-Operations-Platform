export function generateProjectEpicsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
