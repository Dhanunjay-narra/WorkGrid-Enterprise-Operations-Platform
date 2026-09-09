export function generateIntStripePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
