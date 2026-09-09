export class AiPromptsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsRecord" };
  }
}
