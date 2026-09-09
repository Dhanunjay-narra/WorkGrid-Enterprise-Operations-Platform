export type BiKpisReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisReportStateMachine {
  private allowedTransitions: Record<BiKpisReportState, BiKpisReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisReportState, to: BiKpisReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisReportState, to: BiKpisReportState): BiKpisReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisReport: " + from + " -> " + to);
    }
    return to;
  }
}
