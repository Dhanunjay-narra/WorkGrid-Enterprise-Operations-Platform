export type BiExportsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsQueueStateMachine {
  private allowedTransitions: Record<BiExportsQueueState, BiExportsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsQueueState, to: BiExportsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsQueueState, to: BiExportsQueueState): BiExportsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
