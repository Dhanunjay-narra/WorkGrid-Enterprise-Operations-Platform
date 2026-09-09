export type CommDigestRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestRuleStateMachine {
  private allowedTransitions: Record<CommDigestRuleState, CommDigestRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestRuleState, to: CommDigestRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestRuleState, to: CommDigestRuleState): CommDigestRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestRule: " + from + " -> " + to);
    }
    return to;
  }
}
