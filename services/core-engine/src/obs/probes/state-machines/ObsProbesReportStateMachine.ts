export type ObsProbesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesReportStateMachine {
  private allowedTransitions: Record<ObsProbesReportState, ObsProbesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesReportState, to: ObsProbesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesReportState, to: ObsProbesReportState): ObsProbesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesReport: " + from + " -> " + to);
    }
    return to;
  }
}
