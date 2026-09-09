export function generateProjectCapacitySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacitySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
