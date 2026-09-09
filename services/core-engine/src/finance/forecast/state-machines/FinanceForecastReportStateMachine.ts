export type FinanceForecastReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastReportStateMachine {
  private allowedTransitions: Record<FinanceForecastReportState, FinanceForecastReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastReportState, to: FinanceForecastReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastReportState, to: FinanceForecastReportState): FinanceForecastReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastReport: " + from + " -> " + to);
    }
    return to;
  }
}
