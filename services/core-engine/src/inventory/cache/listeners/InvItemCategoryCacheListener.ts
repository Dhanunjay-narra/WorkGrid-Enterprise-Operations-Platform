export class InvItemCategoryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvItemCategory:" + entityId);
  }
}
