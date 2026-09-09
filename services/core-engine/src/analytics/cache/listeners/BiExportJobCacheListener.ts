export class BiExportJobCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiExportJob:" + entityId);
  }
}
