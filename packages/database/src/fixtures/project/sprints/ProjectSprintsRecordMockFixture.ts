export function generateProjectSprintsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
