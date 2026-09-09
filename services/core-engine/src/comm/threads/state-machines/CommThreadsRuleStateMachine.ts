export type CommThreadsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsRuleStateMachine {
  private allowedTransitions: Record<CommThreadsRuleState, CommThreadsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsRuleState, to: CommThreadsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsRuleState, to: CommThreadsRuleState): CommThreadsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsRule: " + from + " -> " + to);
    }
    return to;
  }
}
