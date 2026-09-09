export function generateEventsReplayConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
