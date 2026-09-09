export function generateEventsPartitionsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
