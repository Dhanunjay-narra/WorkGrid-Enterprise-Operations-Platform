export type FinanceForecastProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastProfileStateMachine {
  private allowedTransitions: Record<FinanceForecastProfileState, FinanceForecastProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastProfileState, to: FinanceForecastProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastProfileState, to: FinanceForecastProfileState): FinanceForecastProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastProfile: " + from + " -> " + to);
    }
    return to;
  }
}
