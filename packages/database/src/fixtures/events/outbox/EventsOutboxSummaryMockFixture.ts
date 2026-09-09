export function generateEventsOutboxSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
