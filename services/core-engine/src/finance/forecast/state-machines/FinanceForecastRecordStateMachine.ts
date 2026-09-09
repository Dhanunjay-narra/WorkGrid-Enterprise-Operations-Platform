export type FinanceForecastRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastRecordStateMachine {
  private allowedTransitions: Record<FinanceForecastRecordState, FinanceForecastRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastRecordState, to: FinanceForecastRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastRecordState, to: FinanceForecastRecordState): FinanceForecastRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastRecord: " + from + " -> " + to);
    }
    return to;
  }
}
