export function generateEventsPartitionsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
