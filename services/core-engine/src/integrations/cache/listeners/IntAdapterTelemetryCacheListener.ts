export class IntAdapterTelemetryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntAdapterTelemetry:" + entityId);
  }
}
