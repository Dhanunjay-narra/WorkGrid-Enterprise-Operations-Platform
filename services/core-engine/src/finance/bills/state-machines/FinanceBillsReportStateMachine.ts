export type FinanceBillsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsReportStateMachine {
  private allowedTransitions: Record<FinanceBillsReportState, FinanceBillsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsReportState, to: FinanceBillsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsReportState, to: FinanceBillsReportState): FinanceBillsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsReport: " + from + " -> " + to);
    }
    return to;
  }
}
