export type SecPiiMaskingRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecPiiMaskingRuleStateMachine {
  private validTransitions: Record<SecPiiMaskingRuleState, SecPiiMaskingRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecPiiMaskingRuleState, next: SecPiiMaskingRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecPiiMaskingRuleState, next: SecPiiMaskingRuleState): SecPiiMaskingRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecPiiMaskingRule: from " + current + " to " + next);
    }
    return next;
  }
}
