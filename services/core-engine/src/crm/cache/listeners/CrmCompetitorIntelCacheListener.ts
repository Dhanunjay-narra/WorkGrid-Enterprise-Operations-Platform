export class CrmCompetitorIntelCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmCompetitorIntel:" + entityId);
  }
}
