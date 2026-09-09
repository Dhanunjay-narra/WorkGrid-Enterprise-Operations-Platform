export class SupSlaPolicyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupSlaPolicy:" + entityId);
  }
}
