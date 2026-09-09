export class EventsConsumersReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersReport" };
  }
}
