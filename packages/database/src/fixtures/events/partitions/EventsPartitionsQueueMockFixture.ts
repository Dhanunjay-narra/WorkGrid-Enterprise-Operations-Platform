export function generateEventsPartitionsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
