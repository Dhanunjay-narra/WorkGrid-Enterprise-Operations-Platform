export function generateIntStripeRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
