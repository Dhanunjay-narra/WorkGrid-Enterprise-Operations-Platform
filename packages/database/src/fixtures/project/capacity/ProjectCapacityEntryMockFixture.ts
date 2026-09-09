export function generateProjectCapacityEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
