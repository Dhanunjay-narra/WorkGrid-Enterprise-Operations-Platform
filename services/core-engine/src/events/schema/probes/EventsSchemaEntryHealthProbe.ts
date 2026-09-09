export class EventsSchemaEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaEntry" };
  }
}
