export function generateEventsPartitionsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
