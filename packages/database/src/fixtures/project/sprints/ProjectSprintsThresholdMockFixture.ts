export function generateProjectSprintsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
