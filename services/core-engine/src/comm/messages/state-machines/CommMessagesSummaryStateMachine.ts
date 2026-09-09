export type CommMessagesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesSummaryStateMachine {
  private allowedTransitions: Record<CommMessagesSummaryState, CommMessagesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesSummaryState, to: CommMessagesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesSummaryState, to: CommMessagesSummaryState): CommMessagesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
