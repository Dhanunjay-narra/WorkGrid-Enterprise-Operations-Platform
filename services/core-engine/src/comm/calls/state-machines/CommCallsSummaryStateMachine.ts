export type CommCallsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsSummaryStateMachine {
  private allowedTransitions: Record<CommCallsSummaryState, CommCallsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsSummaryState, to: CommCallsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsSummaryState, to: CommCallsSummaryState): CommCallsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
