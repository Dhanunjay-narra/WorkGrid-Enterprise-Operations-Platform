export class CrmLeadScoreCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmLeadScore:" + entityId);
  }
}
