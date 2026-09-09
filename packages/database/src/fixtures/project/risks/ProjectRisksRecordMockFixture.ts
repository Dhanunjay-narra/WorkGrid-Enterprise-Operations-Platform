export function generateProjectRisksRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
