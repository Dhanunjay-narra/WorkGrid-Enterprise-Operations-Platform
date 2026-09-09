export function generateProjectEpicsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
