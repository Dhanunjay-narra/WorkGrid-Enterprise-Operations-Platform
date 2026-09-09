export type FinanceForecastPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastPayloadStateMachine {
  private allowedTransitions: Record<FinanceForecastPayloadState, FinanceForecastPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastPayloadState, to: FinanceForecastPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastPayloadState, to: FinanceForecastPayloadState): FinanceForecastPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastPayload: " + from + " -> " + to);
    }
    return to;
  }
}
