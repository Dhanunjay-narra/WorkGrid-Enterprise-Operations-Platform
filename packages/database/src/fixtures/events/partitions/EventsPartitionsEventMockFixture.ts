export function generateEventsPartitionsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
