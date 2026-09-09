export function generateEventsConsumersPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
