export class CrmCallLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmCallLog:" + entityId);
  }
}
