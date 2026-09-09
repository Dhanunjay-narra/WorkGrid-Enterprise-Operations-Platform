export class PrjIssueReportCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjIssueReport:" + entityId);
  }
}
