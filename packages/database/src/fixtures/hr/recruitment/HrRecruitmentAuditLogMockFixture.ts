export function generateHrRecruitmentAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
