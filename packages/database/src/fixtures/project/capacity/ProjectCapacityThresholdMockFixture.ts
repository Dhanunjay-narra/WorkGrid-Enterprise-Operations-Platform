export function generateProjectCapacityThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
