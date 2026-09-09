export type FinanceTaxesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesReportStateMachine {
  private allowedTransitions: Record<FinanceTaxesReportState, FinanceTaxesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesReportState, to: FinanceTaxesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesReportState, to: FinanceTaxesReportState): FinanceTaxesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesReport: " + from + " -> " + to);
    }
    return to;
  }
}
