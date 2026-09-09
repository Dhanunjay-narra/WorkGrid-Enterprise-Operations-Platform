export function generateEventsPartitionsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
