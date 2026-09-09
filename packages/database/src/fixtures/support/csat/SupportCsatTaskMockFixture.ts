export function generateSupportCsatTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
