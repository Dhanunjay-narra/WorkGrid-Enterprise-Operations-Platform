export type IntTransformationRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntTransformationRuleStateMachine {
  private validTransitions: Record<IntTransformationRuleState, IntTransformationRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntTransformationRuleState, next: IntTransformationRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntTransformationRuleState, next: IntTransformationRuleState): IntTransformationRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntTransformationRule: from " + current + " to " + next);
    }
    return next;
  }
}
