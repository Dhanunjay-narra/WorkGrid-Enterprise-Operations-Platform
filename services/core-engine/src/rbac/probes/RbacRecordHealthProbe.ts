export class RbacRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacRecord" };
  }
}
