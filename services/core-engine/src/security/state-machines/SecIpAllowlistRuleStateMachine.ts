export type SecIpAllowlistRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecIpAllowlistRuleStateMachine {
  private validTransitions: Record<SecIpAllowlistRuleState, SecIpAllowlistRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecIpAllowlistRuleState, next: SecIpAllowlistRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecIpAllowlistRuleState, next: SecIpAllowlistRuleState): SecIpAllowlistRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecIpAllowlistRule: from " + current + " to " + next);
    }
    return next;
  }
}
