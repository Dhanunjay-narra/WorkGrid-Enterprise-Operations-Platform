export type CrmOpportunitySplitState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmOpportunitySplitStateMachine {
  private validTransitions: Record<CrmOpportunitySplitState, CrmOpportunitySplitState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmOpportunitySplitState, next: CrmOpportunitySplitState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmOpportunitySplitState, next: CrmOpportunitySplitState): CrmOpportunitySplitState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmOpportunitySplit: from " + current + " to " + next);
    }
    return next;
  }
}
