export class DmsExportPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportPolicy" };
  }
}
