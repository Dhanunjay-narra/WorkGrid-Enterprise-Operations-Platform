export class IdSecurityKeyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdSecurityKey:" + entityId);
  }
}
