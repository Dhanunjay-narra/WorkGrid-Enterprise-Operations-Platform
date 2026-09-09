export function generateEventsPartitionsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
