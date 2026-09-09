export function generateIntStripeItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
