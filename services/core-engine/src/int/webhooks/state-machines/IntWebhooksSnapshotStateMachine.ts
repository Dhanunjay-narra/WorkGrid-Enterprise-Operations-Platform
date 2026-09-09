export type IntWebhooksSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksSnapshotStateMachine {
  private allowedTransitions: Record<IntWebhooksSnapshotState, IntWebhooksSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksSnapshotState, to: IntWebhooksSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksSnapshotState, to: IntWebhooksSnapshotState): IntWebhooksSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
