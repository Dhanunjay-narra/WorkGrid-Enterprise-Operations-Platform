export class SupSatisfactionReportCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupSatisfactionReport:" + entityId);
  }
}
