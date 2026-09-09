export type CrmDealState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmDealStateMachine {
  private validTransitions: Record<CrmDealState, CrmDealState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmDealState, next: CrmDealState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmDealState, next: CrmDealState): CrmDealState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmDeal: from " + current + " to " + next);
    }
    return next;
  }
}
