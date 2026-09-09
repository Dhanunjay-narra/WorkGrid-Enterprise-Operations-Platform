export function generateIntStripeReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
