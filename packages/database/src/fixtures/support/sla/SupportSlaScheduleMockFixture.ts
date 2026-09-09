export function generateSupportSlaScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
