export class BiKpisReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisReport" };
  }
}
