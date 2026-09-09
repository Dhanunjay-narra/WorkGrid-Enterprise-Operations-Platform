export function generateEventsIdempotencySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
