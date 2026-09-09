export type BiWidgetsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsQueueStateMachine {
  private allowedTransitions: Record<BiWidgetsQueueState, BiWidgetsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsQueueState, to: BiWidgetsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsQueueState, to: BiWidgetsQueueState): BiWidgetsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
