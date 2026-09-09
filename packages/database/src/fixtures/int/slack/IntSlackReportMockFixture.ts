export function generateIntSlackReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
