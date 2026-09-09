export function generateEventsReplayEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
