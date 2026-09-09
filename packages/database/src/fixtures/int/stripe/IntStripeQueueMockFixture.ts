export function generateIntStripeQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
