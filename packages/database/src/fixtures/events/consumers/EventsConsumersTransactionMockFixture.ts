export function generateEventsConsumersTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
