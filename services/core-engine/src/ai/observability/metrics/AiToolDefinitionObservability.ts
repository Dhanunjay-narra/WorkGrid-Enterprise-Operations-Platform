export class AiToolDefinitionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_ai_tooldefinition_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
