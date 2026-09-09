export class BiReportQueryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiReportQuery:" + entityId);
  }
}
