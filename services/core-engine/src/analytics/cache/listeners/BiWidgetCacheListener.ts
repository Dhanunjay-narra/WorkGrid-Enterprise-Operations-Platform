export class BiWidgetCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiWidget:" + entityId);
  }
}
