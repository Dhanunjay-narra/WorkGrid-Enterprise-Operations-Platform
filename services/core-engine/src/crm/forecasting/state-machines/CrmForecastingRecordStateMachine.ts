export type CrmForecastingRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingRecordStateMachine {
  private allowedTransitions: Record<CrmForecastingRecordState, CrmForecastingRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingRecordState, to: CrmForecastingRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingRecordState, to: CrmForecastingRecordState): CrmForecastingRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingRecord: " + from + " -> " + to);
    }
    return to;
  }
}
