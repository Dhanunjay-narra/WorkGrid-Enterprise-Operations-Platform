export type InvSupplierScorecardState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvSupplierScorecardStateMachine {
  private validTransitions: Record<InvSupplierScorecardState, InvSupplierScorecardState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvSupplierScorecardState, next: InvSupplierScorecardState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvSupplierScorecardState, next: InvSupplierScorecardState): InvSupplierScorecardState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvSupplierScorecard: from " + current + " to " + next);
    }
    return next;
  }
}
