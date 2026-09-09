export function generateIntStripeMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
