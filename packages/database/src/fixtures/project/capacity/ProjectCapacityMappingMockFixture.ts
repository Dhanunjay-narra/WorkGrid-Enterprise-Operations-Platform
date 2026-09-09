export function generateProjectCapacityMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
