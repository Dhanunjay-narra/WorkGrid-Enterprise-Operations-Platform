export class BiExportsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsReport" };
  }
}
