export class RbacPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacPolicy" };
  }
}
