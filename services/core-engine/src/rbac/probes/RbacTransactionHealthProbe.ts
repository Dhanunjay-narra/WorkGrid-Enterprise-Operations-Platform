export class RbacTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacTransaction" };
  }
}
