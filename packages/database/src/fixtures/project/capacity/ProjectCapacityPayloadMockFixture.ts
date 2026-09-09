export function generateProjectCapacityPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
