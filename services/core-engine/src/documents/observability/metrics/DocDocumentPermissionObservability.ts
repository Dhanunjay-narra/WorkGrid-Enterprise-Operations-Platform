export class DocDocumentPermissionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_documents_documentpermission_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
