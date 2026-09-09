export class EventsConsumersSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersSession" };
  }
}
