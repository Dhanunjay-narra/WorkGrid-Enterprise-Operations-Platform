export function generateIntStripeMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
