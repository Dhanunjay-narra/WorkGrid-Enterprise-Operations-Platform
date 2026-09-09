export function generateIntStripeNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
