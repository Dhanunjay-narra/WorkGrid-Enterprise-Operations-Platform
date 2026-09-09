export function generateProjectRisksSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
