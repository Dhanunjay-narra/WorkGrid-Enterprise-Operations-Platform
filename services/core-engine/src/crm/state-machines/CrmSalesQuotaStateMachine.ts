export type CrmSalesQuotaState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmSalesQuotaStateMachine {
  private validTransitions: Record<CrmSalesQuotaState, CrmSalesQuotaState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmSalesQuotaState, next: CrmSalesQuotaState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmSalesQuotaState, next: CrmSalesQuotaState): CrmSalesQuotaState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmSalesQuota: from " + current + " to " + next);
    }
    return next;
  }
}
