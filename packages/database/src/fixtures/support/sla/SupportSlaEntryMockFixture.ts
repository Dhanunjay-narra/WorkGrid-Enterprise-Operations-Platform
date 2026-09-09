export function generateSupportSlaEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
