export function generateEventsConsumersPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
