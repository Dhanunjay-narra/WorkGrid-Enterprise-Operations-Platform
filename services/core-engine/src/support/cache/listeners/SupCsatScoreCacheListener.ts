export class SupCsatScoreCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupCsatScore:" + entityId);
  }
}
