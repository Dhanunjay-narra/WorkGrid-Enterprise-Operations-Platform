export class BiExecutiveSummaryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiExecutiveSummary:" + entityId);
  }
}
