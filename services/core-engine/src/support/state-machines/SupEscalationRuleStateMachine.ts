export type SupEscalationRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupEscalationRuleStateMachine {
  private validTransitions: Record<SupEscalationRuleState, SupEscalationRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupEscalationRuleState, next: SupEscalationRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupEscalationRuleState, next: SupEscalationRuleState): SupEscalationRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupEscalationRule: from " + current + " to " + next);
    }
    return next;
  }
}
