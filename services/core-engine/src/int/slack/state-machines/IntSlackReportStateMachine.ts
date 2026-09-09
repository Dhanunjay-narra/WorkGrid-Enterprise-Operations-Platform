export type IntSlackReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackReportStateMachine {
  private allowedTransitions: Record<IntSlackReportState, IntSlackReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackReportState, to: IntSlackReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackReportState, to: IntSlackReportState): IntSlackReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackReport: " + from + " -> " + to);
    }
    return to;
  }
}
