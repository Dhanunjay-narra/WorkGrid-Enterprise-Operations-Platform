export class AiDocumentChunkObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_ai_documentchunk_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
