export type AiModelRoutingRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiModelRoutingRuleStateMachine {
  private validTransitions: Record<AiModelRoutingRuleState, AiModelRoutingRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiModelRoutingRuleState, next: AiModelRoutingRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiModelRoutingRuleState, next: AiModelRoutingRuleState): AiModelRoutingRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiModelRoutingRule: from " + current + " to " + next);
    }
    return next;
  }
}
