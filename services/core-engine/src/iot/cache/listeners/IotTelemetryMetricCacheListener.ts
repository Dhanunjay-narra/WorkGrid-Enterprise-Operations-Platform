export class IotTelemetryMetricCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotTelemetryMetric:" + entityId);
  }
}
