export function generateEventsOutboxPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
