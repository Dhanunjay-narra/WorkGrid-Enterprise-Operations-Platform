export function generateEventsOutboxReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
