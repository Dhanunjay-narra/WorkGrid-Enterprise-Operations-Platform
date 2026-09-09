export type IntStripeSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeSummaryStateMachine {
  private allowedTransitions: Record<IntStripeSummaryState, IntStripeSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeSummaryState, to: IntStripeSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeSummaryState, to: IntStripeSummaryState): IntStripeSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeSummary: " + from + " -> " + to);
    }
    return to;
  }
}
