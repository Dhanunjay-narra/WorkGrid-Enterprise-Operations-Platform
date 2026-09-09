export function generateIntSlackSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
