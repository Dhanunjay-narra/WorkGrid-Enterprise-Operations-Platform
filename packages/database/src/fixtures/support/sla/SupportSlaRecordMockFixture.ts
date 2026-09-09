export function generateSupportSlaRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
