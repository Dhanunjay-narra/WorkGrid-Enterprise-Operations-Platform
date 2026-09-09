export type CommCallsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsReportStateMachine {
  private allowedTransitions: Record<CommCallsReportState, CommCallsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsReportState, to: CommCallsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsReportState, to: CommCallsReportState): CommCallsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsReport: " + from + " -> " + to);
    }
    return to;
  }
}
