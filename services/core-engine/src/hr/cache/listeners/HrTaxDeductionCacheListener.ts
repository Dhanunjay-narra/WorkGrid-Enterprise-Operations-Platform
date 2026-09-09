export class HrTaxDeductionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrTaxDeduction:" + entityId);
  }
}
