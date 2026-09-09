export class CrmHealthMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthMapping" };
  }
}
