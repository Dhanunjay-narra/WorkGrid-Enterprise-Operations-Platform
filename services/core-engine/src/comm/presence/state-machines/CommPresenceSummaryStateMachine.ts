export type CommPresenceSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceSummaryStateMachine {
  private allowedTransitions: Record<CommPresenceSummaryState, CommPresenceSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceSummaryState, to: CommPresenceSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceSummaryState, to: CommPresenceSummaryState): CommPresenceSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceSummary: " + from + " -> " + to);
    }
    return to;
  }
}
