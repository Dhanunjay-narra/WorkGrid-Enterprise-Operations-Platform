export class SupTicketCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupTicket:" + entityId);
  }
}
