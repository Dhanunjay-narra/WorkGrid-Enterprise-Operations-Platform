export function generateProjectCapacityScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacitySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
