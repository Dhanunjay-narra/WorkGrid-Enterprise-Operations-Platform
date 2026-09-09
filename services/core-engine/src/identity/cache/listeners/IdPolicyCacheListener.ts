export class IdPolicyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdPolicy:" + entityId);
  }
}
