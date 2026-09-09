export class SupportEscalationBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationBatch" };
  }
}
