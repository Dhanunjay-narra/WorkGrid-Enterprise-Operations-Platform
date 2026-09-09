export function generateIntStripeConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
