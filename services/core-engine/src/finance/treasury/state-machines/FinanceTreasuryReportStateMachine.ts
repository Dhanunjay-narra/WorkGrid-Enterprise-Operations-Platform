export type FinanceTreasuryReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasuryReportStateMachine {
  private allowedTransitions: Record<FinanceTreasuryReportState, FinanceTreasuryReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasuryReportState, to: FinanceTreasuryReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasuryReportState, to: FinanceTreasuryReportState): FinanceTreasuryReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasuryReport: " + from + " -> " + to);
    }
    return to;
  }
}
