export function generateIntStripeSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
