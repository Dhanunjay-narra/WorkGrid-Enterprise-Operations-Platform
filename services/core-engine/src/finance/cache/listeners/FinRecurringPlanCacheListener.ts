export class FinRecurringPlanCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinRecurringPlan:" + entityId);
  }
}
