export type AbacThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacThresholdStateMachine {
  private allowedTransitions: Record<AbacThresholdState, AbacThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacThresholdState, to: AbacThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacThresholdState, to: AbacThresholdState): AbacThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
