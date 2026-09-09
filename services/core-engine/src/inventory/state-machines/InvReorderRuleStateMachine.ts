export type InvReorderRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvReorderRuleStateMachine {
  private validTransitions: Record<InvReorderRuleState, InvReorderRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvReorderRuleState, next: InvReorderRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvReorderRuleState, next: InvReorderRuleState): InvReorderRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvReorderRule: from " + current + " to " + next);
    }
    return next;
  }
}
