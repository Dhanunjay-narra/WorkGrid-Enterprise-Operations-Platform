export class IotThresholdAlertRuleCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotThresholdAlertRule:" + entityId);
  }
}
