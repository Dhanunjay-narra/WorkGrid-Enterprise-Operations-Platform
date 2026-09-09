export function generateSupportSlaTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
