export type DmsOcrThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrThresholdStateMachine {
  private allowedTransitions: Record<DmsOcrThresholdState, DmsOcrThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrThresholdState, to: DmsOcrThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrThresholdState, to: DmsOcrThresholdState): DmsOcrThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
