export function generateIntStripeEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
