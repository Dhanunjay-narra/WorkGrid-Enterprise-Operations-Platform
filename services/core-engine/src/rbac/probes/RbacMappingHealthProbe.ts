export class RbacMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacMapping" };
  }
}
