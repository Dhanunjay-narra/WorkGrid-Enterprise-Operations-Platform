export function generateEventsConsumersSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
