export function generateBiKpisReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
