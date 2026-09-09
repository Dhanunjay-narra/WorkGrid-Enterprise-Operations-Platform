export function generateIntStripeSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
