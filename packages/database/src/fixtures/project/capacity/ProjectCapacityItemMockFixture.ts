export function generateProjectCapacityItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
