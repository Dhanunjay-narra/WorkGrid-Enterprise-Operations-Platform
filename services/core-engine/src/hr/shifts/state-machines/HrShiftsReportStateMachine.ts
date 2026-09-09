export type HrShiftsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsReportStateMachine {
  private allowedTransitions: Record<HrShiftsReportState, HrShiftsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsReportState, to: HrShiftsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsReportState, to: HrShiftsReportState): HrShiftsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsReport: " + from + " -> " + to);
    }
    return to;
  }
}
