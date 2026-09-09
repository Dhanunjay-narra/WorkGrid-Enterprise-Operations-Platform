export type SupRoutingConditionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupRoutingConditionStateMachine {
  private validTransitions: Record<SupRoutingConditionState, SupRoutingConditionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupRoutingConditionState, next: SupRoutingConditionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupRoutingConditionState, next: SupRoutingConditionState): SupRoutingConditionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupRoutingCondition: from " + current + " to " + next);
    }
    return next;
  }
}
