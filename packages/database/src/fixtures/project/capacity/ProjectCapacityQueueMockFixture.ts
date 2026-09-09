export function generateProjectCapacityQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
