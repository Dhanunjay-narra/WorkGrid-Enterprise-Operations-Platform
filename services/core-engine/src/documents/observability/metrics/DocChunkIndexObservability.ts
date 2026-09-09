export class DocChunkIndexObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_documents_chunkindex_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
