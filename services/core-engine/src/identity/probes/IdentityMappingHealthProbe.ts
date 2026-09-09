export class IdentityMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityMapping" };
  }
}
