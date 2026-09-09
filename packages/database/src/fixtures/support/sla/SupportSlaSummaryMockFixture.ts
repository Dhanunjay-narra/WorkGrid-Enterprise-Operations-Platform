export function generateSupportSlaSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
