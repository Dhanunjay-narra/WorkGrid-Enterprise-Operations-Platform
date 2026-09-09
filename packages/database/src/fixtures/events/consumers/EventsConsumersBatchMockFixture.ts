export function generateEventsConsumersBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
