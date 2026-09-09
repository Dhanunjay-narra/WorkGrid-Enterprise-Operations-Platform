export class DocDocumentPermissionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocDocumentPermission:" + entityId);
  }
}
