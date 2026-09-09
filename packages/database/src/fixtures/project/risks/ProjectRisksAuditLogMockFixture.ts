export function generateProjectRisksAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
