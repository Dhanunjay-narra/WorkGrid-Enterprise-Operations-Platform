export type IntSyncSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncSummaryStateMachine {
  private allowedTransitions: Record<IntSyncSummaryState, IntSyncSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncSummaryState, to: IntSyncSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncSummaryState, to: IntSyncSummaryState): IntSyncSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncSummary: " + from + " -> " + to);
    }
    return to;
  }
}
