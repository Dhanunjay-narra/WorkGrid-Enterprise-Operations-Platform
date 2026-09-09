export function generateEventsOutboxConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
