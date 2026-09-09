export class RbacTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacTask" };
  }
}
