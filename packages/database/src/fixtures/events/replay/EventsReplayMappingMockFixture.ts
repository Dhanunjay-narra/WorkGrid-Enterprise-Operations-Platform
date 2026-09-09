export function generateEventsReplayMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
