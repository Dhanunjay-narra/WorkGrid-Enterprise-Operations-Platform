export type BiQueriesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesReportStateMachine {
  private allowedTransitions: Record<BiQueriesReportState, BiQueriesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesReportState, to: BiQueriesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesReportState, to: BiQueriesReportState): BiQueriesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesReport: " + from + " -> " + to);
    }
    return to;
  }
}
