export function generateEventsPartitionsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
