export function generateEventsIdempotencyMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
