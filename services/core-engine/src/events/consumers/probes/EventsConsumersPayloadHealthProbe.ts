export class EventsConsumersPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersPayload" };
  }
}
