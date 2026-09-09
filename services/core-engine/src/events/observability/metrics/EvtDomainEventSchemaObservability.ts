export class EvtDomainEventSchemaObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_events_domaineventschema_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
