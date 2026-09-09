export type DmsRetentionSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionSummaryStateMachine {
  private allowedTransitions: Record<DmsRetentionSummaryState, DmsRetentionSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionSummaryState, to: DmsRetentionSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionSummaryState, to: DmsRetentionSummaryState): DmsRetentionSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionSummary: " + from + " -> " + to);
    }
    return to;
  }
}
