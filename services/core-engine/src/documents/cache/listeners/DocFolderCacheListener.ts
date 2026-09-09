export class DocFolderCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocFolder:" + entityId);
  }
}
