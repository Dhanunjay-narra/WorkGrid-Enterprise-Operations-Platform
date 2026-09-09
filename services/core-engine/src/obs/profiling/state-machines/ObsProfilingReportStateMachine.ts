export type ObsProfilingReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingReportStateMachine {
  private allowedTransitions: Record<ObsProfilingReportState, ObsProfilingReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingReportState, to: ObsProfilingReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingReportState, to: ObsProfilingReportState): ObsProfilingReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingReport: " + from + " -> " + to);
    }
    return to;
  }
}
