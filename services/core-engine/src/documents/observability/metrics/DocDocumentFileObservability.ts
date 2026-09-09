export class DocDocumentFileObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_documents_documentfile_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
