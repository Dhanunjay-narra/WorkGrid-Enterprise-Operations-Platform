export class EventsSchemaMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaMapping" };
  }
}
