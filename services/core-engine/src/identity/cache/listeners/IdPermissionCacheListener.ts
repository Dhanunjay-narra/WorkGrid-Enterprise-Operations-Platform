export class IdPermissionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdPermission:" + entityId);
  }
}
