export type BiWidgetsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsThresholdStateMachine {
  private allowedTransitions: Record<BiWidgetsThresholdState, BiWidgetsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsThresholdState, to: BiWidgetsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsThresholdState, to: BiWidgetsThresholdState): BiWidgetsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
