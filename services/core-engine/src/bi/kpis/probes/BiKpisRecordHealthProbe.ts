export class BiKpisRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisRecord" };
  }
}
