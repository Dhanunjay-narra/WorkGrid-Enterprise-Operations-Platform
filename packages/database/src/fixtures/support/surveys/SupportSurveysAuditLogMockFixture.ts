export function generateSupportSurveysAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
