export function generateSecurityReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
