export function generateProjectSprintsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
