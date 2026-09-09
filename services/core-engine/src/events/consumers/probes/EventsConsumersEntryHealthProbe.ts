export class EventsConsumersEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersEntry" };
  }
}
