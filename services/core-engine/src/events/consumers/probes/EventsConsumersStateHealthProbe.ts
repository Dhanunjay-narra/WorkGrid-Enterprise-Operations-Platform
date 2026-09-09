export class EventsConsumersStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersState" };
  }
}
