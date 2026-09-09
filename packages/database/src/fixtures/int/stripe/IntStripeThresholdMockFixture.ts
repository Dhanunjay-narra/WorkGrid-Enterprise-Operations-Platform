export function generateIntStripeThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
