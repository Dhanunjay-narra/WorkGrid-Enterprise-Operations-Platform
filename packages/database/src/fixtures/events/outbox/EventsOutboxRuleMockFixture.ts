export function generateEventsOutboxRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
