export function generateIntStripeTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
