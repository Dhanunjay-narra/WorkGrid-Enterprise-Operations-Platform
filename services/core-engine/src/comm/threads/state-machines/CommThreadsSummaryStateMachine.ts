export type CommThreadsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsSummaryStateMachine {
  private allowedTransitions: Record<CommThreadsSummaryState, CommThreadsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsSummaryState, to: CommThreadsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsSummaryState, to: CommThreadsSummaryState): CommThreadsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
