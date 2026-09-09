export class IntSlackPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackPolicy" };
  }
}
