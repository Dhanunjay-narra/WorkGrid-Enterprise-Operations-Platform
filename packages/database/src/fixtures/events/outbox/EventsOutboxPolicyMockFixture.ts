export function generateEventsOutboxPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
