export function generateProjectCapacityProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
