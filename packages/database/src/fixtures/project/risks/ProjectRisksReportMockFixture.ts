export function generateProjectRisksReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
