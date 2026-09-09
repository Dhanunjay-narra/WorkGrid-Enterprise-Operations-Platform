export class AbacReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacReport" };
  }
}
