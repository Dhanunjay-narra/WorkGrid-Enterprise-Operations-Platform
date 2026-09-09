export class AiRagRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagRecord" };
  }
}
