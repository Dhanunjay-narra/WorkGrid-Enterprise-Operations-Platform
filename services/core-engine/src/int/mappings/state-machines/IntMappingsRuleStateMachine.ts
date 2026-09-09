export type IntMappingsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsRuleStateMachine {
  private allowedTransitions: Record<IntMappingsRuleState, IntMappingsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsRuleState, to: IntMappingsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsRuleState, to: IntMappingsRuleState): IntMappingsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsRule: " + from + " -> " + to);
    }
    return to;
  }
}
