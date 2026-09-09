export type FinCashFlowItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinCashFlowItemStateMachine {
  private validTransitions: Record<FinCashFlowItemState, FinCashFlowItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinCashFlowItemState, next: FinCashFlowItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinCashFlowItemState, next: FinCashFlowItemState): FinCashFlowItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinCashFlowItem: from " + current + " to " + next);
    }
    return next;
  }
}
