export function generateSupportSlaTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
