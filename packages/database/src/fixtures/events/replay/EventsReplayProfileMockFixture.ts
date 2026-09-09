export function generateEventsReplayProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
