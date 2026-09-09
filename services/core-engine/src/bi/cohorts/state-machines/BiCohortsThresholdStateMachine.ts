export type BiCohortsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsThresholdStateMachine {
  private allowedTransitions: Record<BiCohortsThresholdState, BiCohortsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsThresholdState, to: BiCohortsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsThresholdState, to: BiCohortsThresholdState): BiCohortsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
