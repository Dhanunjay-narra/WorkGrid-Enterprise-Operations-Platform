export function generateProjectEpicsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
