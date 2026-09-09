export function generateEventsOutboxThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
