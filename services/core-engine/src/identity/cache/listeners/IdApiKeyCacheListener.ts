export class IdApiKeyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdApiKey:" + entityId);
  }
}
