export class IntFieldMappingSchemaObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_integrations_fieldmappingschema_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
