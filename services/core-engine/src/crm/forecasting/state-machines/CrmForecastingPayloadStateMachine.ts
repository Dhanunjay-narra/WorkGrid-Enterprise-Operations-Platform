export type CrmForecastingPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingPayloadStateMachine {
  private allowedTransitions: Record<CrmForecastingPayloadState, CrmForecastingPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingPayloadState, to: CrmForecastingPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingPayloadState, to: CrmForecastingPayloadState): CrmForecastingPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingPayload: " + from + " -> " + to);
    }
    return to;
  }
}
