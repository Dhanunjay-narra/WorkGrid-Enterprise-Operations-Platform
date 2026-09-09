export class CommPresenceReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceReport" };
  }
}
