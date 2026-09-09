export class BiCohortGroupCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiCohortGroup:" + entityId);
  }
}
