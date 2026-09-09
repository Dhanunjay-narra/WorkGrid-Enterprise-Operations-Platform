export function generateEventsPartitionsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
