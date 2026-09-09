export class BiDataSourceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiDataSource:" + entityId);
  }
}
