export type CommCallsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsRuleStateMachine {
  private allowedTransitions: Record<CommCallsRuleState, CommCallsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsRuleState, to: CommCallsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsRuleState, to: CommCallsRuleState): CommCallsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsRule: " + from + " -> " + to);
    }
    return to;
  }
}
