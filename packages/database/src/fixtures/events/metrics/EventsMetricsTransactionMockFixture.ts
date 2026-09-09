export function generateEventsMetricsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
