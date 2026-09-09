export type ObsSpansReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansReportStateMachine {
  private allowedTransitions: Record<ObsSpansReportState, ObsSpansReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansReportState, to: ObsSpansReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansReportState, to: ObsSpansReportState): ObsSpansReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansReport: " + from + " -> " + to);
    }
    return to;
  }
}
