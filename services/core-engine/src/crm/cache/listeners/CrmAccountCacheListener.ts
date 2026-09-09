export class CrmAccountCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmAccount:" + entityId);
  }
}
