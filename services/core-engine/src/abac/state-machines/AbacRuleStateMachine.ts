export type AbacRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacRuleStateMachine {
  private allowedTransitions: Record<AbacRuleState, AbacRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacRuleState, to: AbacRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacRuleState, to: AbacRuleState): AbacRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacRule: " + from + " -> " + to);
    }
    return to;
  }
}
