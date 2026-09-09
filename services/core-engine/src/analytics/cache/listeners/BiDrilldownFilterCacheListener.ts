export class BiDrilldownFilterCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiDrilldownFilter:" + entityId);
  }
}
