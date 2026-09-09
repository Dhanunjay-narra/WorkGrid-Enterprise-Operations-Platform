export function generateEventsIdempotencyReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
