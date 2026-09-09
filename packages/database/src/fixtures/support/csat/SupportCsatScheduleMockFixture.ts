export function generateSupportCsatScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
