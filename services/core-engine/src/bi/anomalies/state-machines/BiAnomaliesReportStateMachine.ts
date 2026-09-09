export type BiAnomaliesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesReportStateMachine {
  private allowedTransitions: Record<BiAnomaliesReportState, BiAnomaliesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesReportState, to: BiAnomaliesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesReportState, to: BiAnomaliesReportState): BiAnomaliesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesReport: " + from + " -> " + to);
    }
    return to;
  }
}
