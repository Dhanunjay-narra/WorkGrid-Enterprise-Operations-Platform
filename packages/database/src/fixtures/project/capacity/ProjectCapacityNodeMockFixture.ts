export function generateProjectCapacityNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
