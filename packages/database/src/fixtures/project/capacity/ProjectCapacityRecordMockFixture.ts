export function generateProjectCapacityRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
