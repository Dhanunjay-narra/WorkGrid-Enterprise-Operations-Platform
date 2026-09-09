export type BiCohortsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsTransactionStateMachine {
  private allowedTransitions: Record<BiCohortsTransactionState, BiCohortsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsTransactionState, to: BiCohortsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsTransactionState, to: BiCohortsTransactionState): BiCohortsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
