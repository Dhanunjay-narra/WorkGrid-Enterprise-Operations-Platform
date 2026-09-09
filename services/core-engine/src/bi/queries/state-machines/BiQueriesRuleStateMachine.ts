export type BiQueriesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesRuleStateMachine {
  private allowedTransitions: Record<BiQueriesRuleState, BiQueriesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesRuleState, to: BiQueriesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesRuleState, to: BiQueriesRuleState): BiQueriesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesRule: " + from + " -> " + to);
    }
    return to;
  }
}
