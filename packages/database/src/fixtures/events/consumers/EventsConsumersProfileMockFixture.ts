export function generateEventsConsumersProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
