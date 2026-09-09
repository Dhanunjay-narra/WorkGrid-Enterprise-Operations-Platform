export type FinanceForecastEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastEntryStateMachine {
  private allowedTransitions: Record<FinanceForecastEntryState, FinanceForecastEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastEntryState, to: FinanceForecastEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastEntryState, to: FinanceForecastEntryState): FinanceForecastEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastEntry: " + from + " -> " + to);
    }
    return to;
  }
}
