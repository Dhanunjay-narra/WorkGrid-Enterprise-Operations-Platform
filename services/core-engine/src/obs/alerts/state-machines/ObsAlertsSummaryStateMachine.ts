export type ObsAlertsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsSummaryStateMachine {
  private allowedTransitions: Record<ObsAlertsSummaryState, ObsAlertsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsSummaryState, to: ObsAlertsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsSummaryState, to: ObsAlertsSummaryState): ObsAlertsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
