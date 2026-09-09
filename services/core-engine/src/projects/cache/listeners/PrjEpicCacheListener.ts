export class PrjEpicCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjEpic:" + entityId);
  }
}
