export function generateProjectSprintsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
