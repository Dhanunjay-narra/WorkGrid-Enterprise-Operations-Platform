export function generateSupportSlaBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
