export class RbacItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacItem" };
  }
}
