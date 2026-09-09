export class FinJournalEntryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinJournalEntry:" + entityId);
  }
}
