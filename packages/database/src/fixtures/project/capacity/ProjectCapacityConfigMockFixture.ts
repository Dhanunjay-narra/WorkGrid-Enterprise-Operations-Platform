export function generateProjectCapacityConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
