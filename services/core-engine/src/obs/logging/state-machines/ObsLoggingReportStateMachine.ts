export type ObsLoggingReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingReportStateMachine {
  private allowedTransitions: Record<ObsLoggingReportState, ObsLoggingReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingReportState, to: ObsLoggingReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingReportState, to: ObsLoggingReportState): ObsLoggingReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingReport: " + from + " -> " + to);
    }
    return to;
  }
}
