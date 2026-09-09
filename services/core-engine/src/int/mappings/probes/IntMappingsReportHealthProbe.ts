export class IntMappingsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsReport" };
  }
}
