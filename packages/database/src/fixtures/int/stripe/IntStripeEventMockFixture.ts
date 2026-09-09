export function generateIntStripeEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
