export class PrjSubtaskCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjSubtask:" + entityId);
  }
}
