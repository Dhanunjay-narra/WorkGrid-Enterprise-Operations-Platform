export function generateEventsPartitionsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
