export function generateBiWidgetsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
