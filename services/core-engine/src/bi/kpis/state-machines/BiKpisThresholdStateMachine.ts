export type BiKpisThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisThresholdStateMachine {
  private allowedTransitions: Record<BiKpisThresholdState, BiKpisThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisThresholdState, to: BiKpisThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisThresholdState, to: BiKpisThresholdState): BiKpisThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
