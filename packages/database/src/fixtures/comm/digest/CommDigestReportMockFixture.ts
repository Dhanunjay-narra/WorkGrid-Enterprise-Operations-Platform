export function generateCommDigestReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
