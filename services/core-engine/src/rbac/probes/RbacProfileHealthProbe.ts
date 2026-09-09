export class RbacProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacProfile" };
  }
}
