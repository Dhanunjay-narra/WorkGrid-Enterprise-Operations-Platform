export function generateSupportSlaReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
