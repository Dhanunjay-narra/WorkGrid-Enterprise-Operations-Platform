export function generateEventsConsumersNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
