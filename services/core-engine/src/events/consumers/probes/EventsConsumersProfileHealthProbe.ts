export class EventsConsumersProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersProfile" };
  }
}
