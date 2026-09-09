export function generateIntStripePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
