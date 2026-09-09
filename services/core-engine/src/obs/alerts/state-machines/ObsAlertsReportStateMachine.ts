export type ObsAlertsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsReportStateMachine {
  private allowedTransitions: Record<ObsAlertsReportState, ObsAlertsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsReportState, to: ObsAlertsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsReportState, to: ObsAlertsReportState): ObsAlertsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsReport: " + from + " -> " + to);
    }
    return to;
  }
}
