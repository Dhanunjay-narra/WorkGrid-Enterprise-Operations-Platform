export type IntSyncReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncReportStateMachine {
  private allowedTransitions: Record<IntSyncReportState, IntSyncReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncReportState, to: IntSyncReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncReportState, to: IntSyncReportState): IntSyncReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncReport: " + from + " -> " + to);
    }
    return to;
  }
}
