export type BiAnomaliesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesThresholdStateMachine {
  private allowedTransitions: Record<BiAnomaliesThresholdState, BiAnomaliesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesThresholdState, to: BiAnomaliesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesThresholdState, to: BiAnomaliesThresholdState): BiAnomaliesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
