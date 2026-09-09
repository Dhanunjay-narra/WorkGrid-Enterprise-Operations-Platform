export class IotHeartbeatRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotHeartbeatRecord:" + entityId);
  }
}
