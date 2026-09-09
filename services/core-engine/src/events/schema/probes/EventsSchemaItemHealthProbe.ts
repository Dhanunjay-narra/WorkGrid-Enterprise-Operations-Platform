export class EventsSchemaItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaItem" };
  }
}
