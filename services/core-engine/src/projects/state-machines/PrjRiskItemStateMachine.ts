export type PrjRiskItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjRiskItemStateMachine {
  private validTransitions: Record<PrjRiskItemState, PrjRiskItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjRiskItemState, next: PrjRiskItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjRiskItemState, next: PrjRiskItemState): PrjRiskItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjRiskItem: from " + current + " to " + next);
    }
    return next;
  }
}
