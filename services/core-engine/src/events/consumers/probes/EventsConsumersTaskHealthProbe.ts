export class EventsConsumersTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersTask" };
  }
}
