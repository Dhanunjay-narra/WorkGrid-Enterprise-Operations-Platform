export class CrmContactCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmContact:" + entityId);
  }
}
