export type DmsVersionsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsThresholdStateMachine {
  private allowedTransitions: Record<DmsVersionsThresholdState, DmsVersionsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsThresholdState, to: DmsVersionsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsThresholdState, to: DmsVersionsThresholdState): DmsVersionsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
