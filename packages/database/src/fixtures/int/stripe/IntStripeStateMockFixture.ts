export function generateIntStripeStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
