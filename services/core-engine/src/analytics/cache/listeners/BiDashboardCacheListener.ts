export class BiDashboardCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiDashboard:" + entityId);
  }
}
