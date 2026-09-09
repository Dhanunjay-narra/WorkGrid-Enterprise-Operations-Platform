export type FinanceForecastSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastSessionStateMachine {
  private allowedTransitions: Record<FinanceForecastSessionState, FinanceForecastSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastSessionState, to: FinanceForecastSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastSessionState, to: FinanceForecastSessionState): FinanceForecastSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastSession: " + from + " -> " + to);
    }
    return to;
  }
}
