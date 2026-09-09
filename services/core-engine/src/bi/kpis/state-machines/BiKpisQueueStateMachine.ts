export type BiKpisQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisQueueStateMachine {
  private allowedTransitions: Record<BiKpisQueueState, BiKpisQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisQueueState, to: BiKpisQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisQueueState, to: BiKpisQueueState): BiKpisQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisQueue: " + from + " -> " + to);
    }
    return to;
  }
}
