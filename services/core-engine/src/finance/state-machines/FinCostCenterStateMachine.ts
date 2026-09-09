export type FinCostCenterState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinCostCenterStateMachine {
  private validTransitions: Record<FinCostCenterState, FinCostCenterState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinCostCenterState, next: FinCostCenterState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinCostCenterState, next: FinCostCenterState): FinCostCenterState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinCostCenter: from " + current + " to " + next);
    }
    return next;
  }
}
