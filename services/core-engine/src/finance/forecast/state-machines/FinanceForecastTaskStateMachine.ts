export type FinanceForecastTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastTaskStateMachine {
  private allowedTransitions: Record<FinanceForecastTaskState, FinanceForecastTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastTaskState, to: FinanceForecastTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastTaskState, to: FinanceForecastTaskState): FinanceForecastTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastTask: " + from + " -> " + to);
    }
    return to;
  }
}
