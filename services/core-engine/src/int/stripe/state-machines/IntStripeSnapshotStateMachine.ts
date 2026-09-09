export type IntStripeSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeSnapshotStateMachine {
  private allowedTransitions: Record<IntStripeSnapshotState, IntStripeSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeSnapshotState, to: IntStripeSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeSnapshotState, to: IntStripeSnapshotState): IntStripeSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
