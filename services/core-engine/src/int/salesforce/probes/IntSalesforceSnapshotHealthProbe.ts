export class IntSalesforceSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceSnapshot" };
  }
}
