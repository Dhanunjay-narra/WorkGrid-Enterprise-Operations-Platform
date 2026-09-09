export class HrPayrollSlipCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrPayrollSlip:" + entityId);
  }
}
