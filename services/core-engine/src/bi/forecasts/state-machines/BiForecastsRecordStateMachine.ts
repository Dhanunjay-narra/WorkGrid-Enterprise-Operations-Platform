export type BiForecastsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsRecordStateMachine {
  private allowedTransitions: Record<BiForecastsRecordState, BiForecastsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsRecordState, to: BiForecastsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsRecordState, to: BiForecastsRecordState): BiForecastsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
