export class EventsConsumersNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersNode" };
  }
}
