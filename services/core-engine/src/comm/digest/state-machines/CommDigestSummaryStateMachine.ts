export type CommDigestSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestSummaryStateMachine {
  private allowedTransitions: Record<CommDigestSummaryState, CommDigestSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestSummaryState, to: CommDigestSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestSummaryState, to: CommDigestSummaryState): CommDigestSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestSummary: " + from + " -> " + to);
    }
    return to;
  }
}
