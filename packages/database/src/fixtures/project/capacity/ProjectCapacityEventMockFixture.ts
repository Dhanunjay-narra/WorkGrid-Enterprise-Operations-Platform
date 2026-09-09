export function generateProjectCapacityEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
