export function generateEventsPartitionsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
