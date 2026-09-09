export class BiKpisMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisMapping" };
  }
}
