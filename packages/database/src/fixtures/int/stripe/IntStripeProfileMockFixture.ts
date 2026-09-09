export function generateIntStripeProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
