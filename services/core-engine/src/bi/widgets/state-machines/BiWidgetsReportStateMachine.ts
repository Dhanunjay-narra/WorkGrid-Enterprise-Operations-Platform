export type BiWidgetsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsReportStateMachine {
  private allowedTransitions: Record<BiWidgetsReportState, BiWidgetsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsReportState, to: BiWidgetsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsReportState, to: BiWidgetsReportState): BiWidgetsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsReport: " + from + " -> " + to);
    }
    return to;
  }
}
